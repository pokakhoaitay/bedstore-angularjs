<?php

/**
 * Step 1: Require the Slim Framework using Composer's autoloader
 *
 * If you are not using Composer, you need to load Slim Framework with your own
 * PSR-4 autoloader.
 */
require 'vendor/autoload.php';
require 'lib/config/app.config.php';
require_once 'lib/config/api.config.php';

require_once 'lib/core/db.core.php';
require_once 'lib/core/app.core.php';
require_once 'services/guard.service.php';
require_once 'midlewares/appguard.middleware.php';




session_start();
$time = $_SERVER['REQUEST_TIME'];
/**
 * for a 30 minute timeout, specified in seconds
 */
$timeout_duration = 5;

/**
 * Here we look for the user’s LAST_ACTIVITY timestamp. If
 * it’s set and indicates our $timeout_duration has passed,
 * blow away any previous $_SESSION data and start a new one.
 */
if (isset($_SESSION['LAST_ACTIVITY']) && ($time - $_SESSION['LAST_ACTIVITY']) > $timeout_duration) {
    session_unset();
    session_destroy();
    session_start();

    $gs=new GuardSevice();
    $gs->InitSession();
}

/**
 * Finally, update LAST_ACTIVITY so that our timeout
 * is based on it and not the user’s login time.
 */
$_SESSION['LAST_ACTIVITY'] = $time;




/**
 * Step 2: Instantiate a Slim application
 *
 * This example instantiates a Slim application using
 * its default settings. However, you will usually configure
 * your Slim application now by passing an associative array
 * of setting names and values into the application constructor.
 */

/**-------------------
 * HANDLE ERROR
 *-------------------*/
$c = new Slim\Container(\lib\config\AppConfig::SLIM_CONFIGS);
//$c['errorHandler'] = function ($c) {
//    return function ($request, $response, $exception) use ($c) {
//        return $c['response']->withStatus(500)
//            ->withHeader('Content-Type', 'text/html')
//            ->write('Something went wrong!');
//    };
//};


//register_shutdown_function('fatal_handler');
//
//function fatal_handler()
//{
//    $lastError = error_get_last();
//    if (!is_null($lastError)) {
//        header("HTTP/1.1 500 Internal Server Error");
//    }
//}

$app = new Slim\App($c);

//$c['xcore\AppCore'] = function ($container) {
//    return new AppCore($container);
//};

$app->add(new AppGuardMiddleware());


//$container = $app->getContainer();

/**
 * Step 3: Define the Slim application routes
 *
 * Here we define several Slim application routes that respond
 * to appropriate HTTP request methods. In this example, the second
 * argument for `Slim::get`, `Slim::post`, `Slim::put`, `Slim::patch`, and `Slim::delete`
 * is an anonymous function.
 */

// Automatically load router files
$routers = glob('routes/*.route.php');
foreach ($routers as $router) {
    require $router;
};

/**
 * Step 4: Run the Slim application
 *
 * This method should be called last. This executes the Slim application
 * and returns the HTTP response to the HTTP client.
 */
$app->run();

<?php

/**
 * Step 1: Require the Slim Framework using Composer's autoloader
 *
 * If you are not using Composer, you need to load Slim Framework with your own
 * PSR-4 autoloader.
 */
require 'vendor/autoload.php';
require 'lib/config/app.config.php';

require_once 'lib/core/db.core.php';
require_once 'lib/core/app.core.php';
require_once 'services/guard.service.php';
require_once 'midlewares/appguard.middleware.php';


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


register_shutdown_function('fatal_handler');

function fatal_handler()
{
    $lastError=error_get_last();
    if (!is_null($lastError)) {
        header("HTTP/1.1 500 Internal Server Error");
    }
}

$app = new Slim\App($c);

$c['xcore\AppCore']=function ($container){
    return new xcore\AppCore($container);
};

$app->add(new AppGuardMiddleware($c->get('xcore\AppCore')));
session_start();

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

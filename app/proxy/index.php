<?php

require 'vendor/autoload.php';
require 'lib/config/app.config.php';
require_once 'lib/config/api.config.php';

require_once 'lib/core/db.core.php';
require_once 'lib/core/app.core.php';
require_once 'services/guard.service.php';
require_once 'lib/core/app.utils.php';


date_default_timezone_set('Asia/Ho_Chi_Minh');

session_start();
$time = $_SERVER['REQUEST_TIME'];
/**
 * for a 30 minute timeout, specified in seconds
 */
$timeout_duration = \lib\config\AppConfig::SESSION_TIMEOUT;

/**
 * Here we look for the user’s LAST_ACTIVITY timestamp. If
 * it’s set and indicates our $timeout_duration has passed,
 * blow away any previous $_SESSION data and start a new one.
 */
if (isset($_SESSION['LAST_ACTIVITY']) && ($time - $_SESSION['LAST_ACTIVITY']) > $timeout_duration) {
    session_unset();
    session_destroy();
    session_start();

//    $gs=new GuardSevice();
//    $gs->InitSession();
//    header("HTTP/1.1 401 Internal Server Error");
}

/**
 * Finally, update LAST_ACTIVITY so that our timeout
 * is based on it and not the user’s login time.
 */
$_SESSION['LAST_ACTIVITY'] = $time;



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

//$app->add(new AppGuardMiddleware());
require_once __DIR__.'/middlewares/transporter.middleware.php';
require_once __DIR__.'/middlewares/appguard.middleware.php';



// Automatically load router files
$routers = glob('routes/*.route.php');
foreach ($routers as $router) {
    require $router;
};

$app->run();

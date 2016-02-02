<?php
/**
 * Created by PhpStorm.
 * User: Poka
 * Date: 2/2/2016
 * Time: 9:29 PM
 */

$app->add(function ($request, $response, $next) {
    //The code for the function like 'BeginExecute' in .NET MVC here
    //..

    //The next route will be executed
    $response = $next($request, $response);

    //The code for the function like 'AfterExecute' in .NET MVC here
    //..

    return $response;
});
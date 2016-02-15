<?php
/**
 * Created by PhpStorm.
 * User: Poka
 * Date: 2/2/2016
 * Time: 9:29 PM
 */


$app->add(function ($request, $response, $next) {
    if (!isset($_SESSION[ApiConfig::TOKEN_NAME_WEB])) {
        $gs = new GuardSevice();
        $gs->InitSession();
        if ($request->getUri()->getPath() != 'init-session')
            $response = $response->withJson(['Reload' => 1]);
        return $response;
    }
    //The code for the function like 'BeforeExecute' in .NET MVC here
    //..

    if (AppCore::CheckIgnoreRoute($request->getUri()->getPath())) {
        $response = $next($request, $response);
    } else {
        if (!isset($_COOKIE[ApiConfig::TOKEN_NAME_WEB])) {
            $response = DenyAccess($request, $response);
        } else {
            $headerTooken = $request->getHeader(ApiConfig::TOKEN_HEADER_NAME_WEB);
            if (isset($headerTooken)
                && !empty($headerTooken[0])
                && isset($_SESSION[ApiConfig::TOKEN_NAME_WEB])
            ) {
                $sessionToken = $_SESSION[ApiConfig::TOKEN_NAME_WEB];
                if ($headerTooken[0] == $sessionToken) {
                    $response = $next($request, $response);
                } else {
                    $response = DenyAccess($request, $response);
                }
            } else {
                $response = DenyAccess($request, $response);
            }
        }

    }


    //The code for the function like 'AfterExecute' in .NET MVC here
    //..

    return $response;
});

function DenyAccess($request, $response)
{
    $response = $response->withStatus(401);
    return $response;
}




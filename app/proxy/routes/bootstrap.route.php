<?php
/**
 * Created by PhpStorm.
 * User: Poka
 * Date: 1/31/2016
 * Time: 9:11 AM
 */

$app->get('/init-session', function ($request, $response) {
    if(!isset($_COOKIE[ApiConfig::TOKEN_NAME_WEB])){
        $guard = new GuardSevice();
        $guard->InitSession();
        unset($guard);
    }

});
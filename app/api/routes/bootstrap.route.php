<?php
/**
 * Created by PhpStorm.
 * User: Poka
 * Date: 1/31/2016
 * Time: 9:11 AM
 */
use lib\config\ApiConfig;

$app->get('/init-session', function ($request, $response) {
    $guard = new GuardSevice();
    $guard->InitSession();
});
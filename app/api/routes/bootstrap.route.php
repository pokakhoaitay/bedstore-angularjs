<?php
/**
 * Created by PhpStorm.
 * User: Poka
 * Date: 1/31/2016
 * Time: 9:11 AM
 */

$app->get('/bootstrap', function($request, $response){
    $response= $response->withHeader('X-Token','123');
    return $response;
});
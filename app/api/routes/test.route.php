<?php
/**
 * Created by PhpStorm.
 * User: Poka
 * Date: 1/30/2016
 * Time: 6:32 AM
 */

$app->get('/',function($request, $response){
   $response=$response->withStatus(200)
       ->withJson(['say'=>'hello']);
    return $response;
});
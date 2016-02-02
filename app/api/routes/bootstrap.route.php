<?php
/**
 * Created by PhpStorm.
 * User: Poka
 * Date: 1/31/2016
 * Time: 9:11 AM
 */

$app->get('/renew-cookie', function($request, $response){
    setcookie('BED-TOKEN', 'bedstore.com.cookie', time() + (86400 * 30), "/"); // 86400 = 1 day
    //throw new Exception('Expired!');
});
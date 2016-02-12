<?php
/**
 * Created by PhpStorm.
 * User: Poka
 * Date: 1/30/2016
 * Time: 6:32 AM
 */
require_once __DIR__ . '/../lib/core/db.core.php';
require_once __DIR__ . '/../services/contact.service.php';
require_once __DIR__ . '/../lib/config/api.config.php';
use lib\config\ApiConfig;

$app->post('/contact/create-contact', function ($request, $response, $submitData) {
    $contact = new ContactService();
    $data = $request->getParams();
    // $contact->createContact($data['name'], $data['email'], $data['messages']);
//    if (!$contact)
//        return $response->withJson(['data' => $request->get('https://www.google.com')]);
//    else
    $client = new GuzzleHttp\Client();
    $res = $client->request('GET', 'https://api.github.com/user', [
        'auth' => ['user', 'pass']
    ]);
    return $response->withJson(['data' => datax]);
});

$app->get('/contact/test', function($req,$res,$args){
    $res=$res->withJson(['data'=>'ok men']);
    return $res;
});

$app->post('/contact/test-post', function($req,$res,$args){
    $res=$res->withJson(['data'=>'ok men post']);
    return $res;
});
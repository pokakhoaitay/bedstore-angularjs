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
    $contact->createContact($data['name'], $data['email'], $data['messages']);
    if (!$contact)
        return $response->withJson(['data' => false]);
    else
        return $response->withJson(['data' => true]);
});
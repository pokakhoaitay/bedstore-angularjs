<?php
/**
 * Created by PhpStorm.
 * User: Poka
 * Date: 1/30/2016
 * Time: 6:32 AM
 */
require_once __DIR__ . '/../lib/core/db.core.php';
require_once __DIR__ . '/../services/contact.service.php';

$app->get('/', function ($request, $response) {
    $contact = new ContactService();

    $response = $response->withStatus(200)->withJson([
        'say' => $contact->getContact(),
    ]);

    return $response;
});
<?php
$app->get('/', function ($request, $response) {
    $response = $response->withStatus(200)
        ->withJson(['say' => 'Hello']);
    return $response;

});

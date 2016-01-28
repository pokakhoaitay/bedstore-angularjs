<?php

// GET index route
$app->get('/', function () use ($app) {
   // echo 'hello';
    $oStuff = new models\Stuff();
    $hello = $oStuff->getAllStuff();
    $app->contentType('application/json');
    echo json_encode($hello);
});

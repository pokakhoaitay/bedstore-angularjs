<?php
/**
 * Created by PhpStorm.
 * User: Poka
 * Date: 2/9/2016
 * Time: 8:34 AM
 */

use \lib\config\AppConfig;


//use GuzzleHttp\Psr7\Request;


$app->add(function ($request, $response, $next) {
    $method = $request->getMethod();
    $contentRaw = $request->getParams();//For POST anf PUT method
    $content = http_build_query($contentRaw);
    $contentType = $request->getHeaderLine('Content-Type');
    $date = gmdate('m/d/Y H:i:s T');
    $path = $request->getUri()->getPath();
    $uri = AppConfig::API_ROOT . $path;
    $signature = $method . '\n'
        . md5($content) . '\n'
        . $contentType . '\n'
        . $date . '\n'
        . $uri;

    $auth = Utils::calculateHMAC($signature, AppConfig::API_SECRET_KEY);
    // $response = $next($request, $response);


    $client = new GuzzleHttp\Client();
    $response = $client->request($method, $path, [
        'base_uri' => AppConfig::API_ROOT,
        'headers' => [
            'auth' => [AppConfig::API_PUBLIC_KEY, $auth, 'BED_WEB'],
            'X-Date' => $date,
            'Content-Type' => $contentType,
        ],
        'form_params' => $contentRaw
    ]);
    return $response;
});
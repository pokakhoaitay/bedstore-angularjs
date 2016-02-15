<?php
/**
 * Created by PhpStorm.
 * User: Poka
 * Date: 2/9/2016
 * Time: 8:34 AM
 */


$app->add(function ($request, $response, $next) {
    if (AppCore::CheckIgnoreRoute($request->getUri()->getPath())) {
        return $response = $next($request, $response);
    }
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


    //try {
        $postdata = $content;
        $opts = array('http' =>
            array(
                'method' => $method,
                'header' => [
                    'Content-type: ' . $contentType,
                    'X-Auth: BED_WEB ' . AppConfig::API_PUBLIC_KEY . ':' . $auth,
                    'X-Date: ' . $date],
                'content' => $postdata
            )
        );

        $context = stream_context_create($opts);
        $xdata = file_get_contents(AppConfig::API_ROOT . $path, false, $context);
        if ($xdata) {
            $response = $response->write($xdata);
        }

//    } catch (Exception $e) {
//        throw $e;
//
//    }
    return $response;

});
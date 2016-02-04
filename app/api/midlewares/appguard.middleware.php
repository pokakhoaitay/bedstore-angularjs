<?php
/**
 * Created by PhpStorm.
 * User: Poka
 * Date: 2/2/2016
 * Time: 9:29 PM
 */
use lib\config\ApiConfig;

//TODO: Consider move this function to a separate function (aka: xsMw, authMw), then $app->add(xsMw), $app->add(authMw)...
class AppGuardMiddleware
{
    protected $appCore;

    function __construct(xcore\AppCore $appCore)
    {
        $this->appCore = $appCore;
    }

    /**
     * @param $request
     * @param $response
     * @param $next
     * Application middleware. Application middleware is invoked for every incoming HTTP request.
     */
    public function __invoke($request, $response, $next)
    {
        //The code for the function like 'BeforeExecute' in .NET MVC here
        //..

        if ($this->appCore->AllowRoutePass())
            $response = $next($request, $response);
        else {
            if ($request->getUri()->getPath() != 'init-session')
                if (!isset($_COOKIE[ApiConfig::TOKEN_NAME_WEB])) {
                    $response = $this->DenyAccess($request, $response);
                } else {
                    $response = $next($request, $response);
//                    $cookVal=$_COOKIE[ApiConfig::TOKEN_NAME_WEB];
//                    $sessionVal=$_SESSION[ApiConfig::TOKEN_NAME_WEB];
//                    if($cookVal==$sessionVal)
//                    //The next route will be executed
//                    $response = $next($request, $response);
//                    else
//                        $response = $this->DenyAccess($request, $response);
                }
        }


        //The code for the function like 'AfterExecute' in .NET MVC here
        //..

        return $response;
    }

    function DenyAccess($request, $response)
    {
        $response = $response->withStatus(403);
        return $response;
    }
}



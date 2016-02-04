<?php
namespace xcore;
/**
 * Created by PhpStorm.
 * User: Poka
 * Date: 2/3/2016
 * Time: 5:29 AM
 */

require_once __DIR__ . '/../config/app.config.php';
use lib\config\AppConfig;
use Psr\Http\Message\ServerRequestInterface as Request;
use Psr\Http\Message\ResponseInterface as Response;
final class AppCore
{
    protected $app;
    protected $container;
    protected $request;
    protected $response;

    function __construct($container)
    {
        $this->response=$container['response'];
        $this->request=$container['request'];
    }
    public function __invoke(Request $request,  Response $response, $args)
    {
        $this->request = $request;
        $this->response = $response;
        return $response;
    }
    public function AllowRoutePass()
    {
        $reqMethod =$this->request->getMethod().'/'.$this->request->getUri()->getPath();
        if (in_array($reqMethod, AppConfig::IGNORE_ROUTES))
            return true;
        return false;
    }

    public static function GetNativeUrlPath($url)
    {
        if (empty($url))
            return parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH);
        return parse_url($url, PHP_URL_PATH);
    }

}
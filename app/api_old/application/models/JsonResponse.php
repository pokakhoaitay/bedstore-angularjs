<?php
/**
 * Created by PhpStorm.
 * User: Poka
 * Date: 12/22/2015
 * Time: 12:18 AM
 */

class JsonResponse{

    function __construct($statusCode, $data, $extData=null)
    {
        $this->statusCode=$statusCode;
        $this->data=$data;
        $this->extData=$extData;
    }

    public $statusCode;
    public $data;
    public $extData=[];

}
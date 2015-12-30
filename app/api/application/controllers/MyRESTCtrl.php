<?php

/**
 * Created by PhpStorm.
 * User: Poka
 * Date: 12/27/2015
 * Time: 9:38 PM
 */
abstract class MyRESRCtrl extends CI_Controller
{
    protected $method;

    function __construct()
    {
        parent::__construct();
        $this->load->database();
        $this->method = $_SERVER['REQUEST_METHOD'];
    }

}
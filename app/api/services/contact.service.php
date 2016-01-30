<?php
/**
 * Created by PhpStorm.
 * User: Poka
 * Date: 1/30/2016
 * Time: 9:18 PM
 */

use lib\core\Db;



class ContactService{
    protected $db;


    function __construct(){
        $this->db = new Db();
    }

    public function getContact(){
        $this->db->connect();
        return $this->db->query();
    }
}
<?php
/**
 * Created by PhpStorm.
 * User: Poka
 * Date: 1/30/2016
 * Time: 8:26 PM
 */

namespace lib\core;
use lib\config\DbConfig;
use mysqli;

require_once __DIR__.'/../config/database.config.php';

/**
 * Referrence to this: https://www.binpress.com/tutorial/using-php-with-mysql-the-right-way/17
 * @package lib\core
 */

class Db
{
    protected static $connection;

    public function connect()
    {
        if (!isset(self::$connection)) {
            self::$connection = new mysqli(
                DbConfig::HOST
                , DbConfig::USER_NAME
                , DbConfig::USER_PASSWORD
                , DbConfig::DB_NAME
            );
        }
        //If connection was not success, handle the error
        if (!self::$connection) {
            // Handle error - notify administrator, log to a file, show an error screen, etc.

            return false;
        }
        return self::$connection;
    }

    /**
     * Execute sql
     * @param $query: The sql query string
     */
    public function query($query)
    {
        $this->connect();
        $result=self::$connection->query($query);
        return $result;
    }

    /**
     * Fetch the last error from the database
     *
     * @return string Database error message
     */

    public function error() {
        $connection = $this -> connect();
        return $connection -> error;
    }
}
<?php
/**
 * Created by PhpStorm.
 * User: Poka
 * Date: 2/5/2016
 * Time: 5:22 AM
 */

final class Utils{
    public static function calculateHMAC($data, $key){
        return base64_encode(hash_hmac('sha1',$data,$key));
    }

}
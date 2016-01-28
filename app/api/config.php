<?php

use lib\Config;

// DB Config
Config::write('db.host', '127.0.0.1');
Config::write('db.port', '3306');
Config::write('db.basename', 'bedstore-db');
Config::write('db.user', 'root');
Config::write('db.password', '@mysql$');

// Project Config
Config::write('path', 'http://localhost/slimMVC');
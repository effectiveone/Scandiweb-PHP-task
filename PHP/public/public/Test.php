<?php

const BASE_PATH = __DIR__ . '/../';
$config = require( BASE_PATH . 'config.php');


require(BASE_PATH . '/../vendor/autoload.php');
require(BASE_PATH . 'helpers.php');

use App\Models\Product;
use App\Core\Response;


$List = Product::getAll();

// var_dump($List);
Response::sendJsonResponse($List);
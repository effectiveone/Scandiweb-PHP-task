<?php

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, Authorization');

const BASE_PATH = __DIR__ . '/../';
$config = require( BASE_PATH . 'config.php');

if ($config['app']['env'] === 'development') {
    header('Access-Control-Allow-Origin: *');

    // If the request is an OPTIONS request (pre-flight check)
    if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
        header('Access-Control-Allow-Origin: *');
        header('Access-Control-Allow-Methods: GET, POST, DELETE, OPTIONS');
        header('Access-Control-Allow-Headers: Content-Type, Authorization');
        header("HTTP/1.1 200 OK");
        exit;
    }
    
}


require(BASE_PATH . '../vendor/autoload.php');
require(BASE_PATH . 'helpers.php');

$router = new \App\Core\Router();
$routes = require( BASE_PATH . 'routes.php');

$uri = parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH);
$method = $_GET['_method'] ?? $_SERVER['REQUEST_METHOD'];

$router->route($uri, $method);
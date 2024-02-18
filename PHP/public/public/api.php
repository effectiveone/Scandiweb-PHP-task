<?php

require __DIR__ . '/vendor/autoload.php';

use App\Core\Router;

// Utwórz obiekt routera
$router = require __DIR__ . '/Core/Router.php';

// Pobierz ścieżkę z URI
$uri = parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH);

// Pobierz metodę HTTP
$method = $_SERVER['REQUEST_METHOD'];

// Wywołaj metodę route
$router->route($uri, $method);

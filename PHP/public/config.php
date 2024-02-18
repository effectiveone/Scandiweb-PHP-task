<?php

return [
    'app' => [
        'env' => getenv('APP_ENV'),
    ],
    'database' => [
        'host' => getenv('DB_HOST'),
        'port' => getenv('DB_PORT'),
        'dbname' => getenv('DB_NAME'),
        'user' => getenv('DB_USER'),
        'password' => getenv('DB_PASSWORD'),
        'charset' => 'utf8mb4',
    ],
];

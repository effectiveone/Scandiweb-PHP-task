<?php

namespace App\Core;

/**
 * The Request class provides methods for handling HTTP requests.
 */
class Request
{
    /**
     * Parses and returns JSON data from the request body.
     *
     * @return array Parsed JSON data
     */
    public static function parseJsonRequest(): array
    {
        $jsonData = file_get_contents('php://input');
        $data = json_decode($jsonData, true);

        if ($data === null && json_last_error() !== JSON_ERROR_NONE) {
            Response::abort('Invalid JSON data', 400);
        }

        return $data;
    }
}

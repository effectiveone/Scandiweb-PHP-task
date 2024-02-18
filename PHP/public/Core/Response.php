<?php

namespace App\Core;

/**
 * The Response class provides methods for handling HTTP responses.
 */
class Response
{
    /**
     * Aborts the request with a JSON response and the given status code.
     *
     * @param string $errorMessage The error message to include in the response
     * @param int $statusCode The HTTP status code (default is 404)
     */
    public static function abort($errorMessage = 'Resource not found', $statusCode = 404)
    {
        $response = [
            'message' => $errorMessage,
        ];

        self::sendJsonResponse($response, $statusCode);
    }

    /**
     * Sends a JSON response with the given data and status code.
     *
     * @param mixed $data The data to include in the response
     * @param int $statusCode The HTTP status code (default is 200)
     */
    public static function sendJsonResponse($data, $statusCode = 200)
    {
        http_response_code($statusCode);
        header('Content-Type: application/json');

        if ($statusCode !== 204) {
            $jsonResponse = self::prepareJsonResponse($data);
            echo $jsonResponse;
        }

        exit;
    }

    /**
     * Prepares the JSON response structure based on the provided data.
     *
     * @param mixed $data The data to include in the response
     * @return string The JSON-encoded response
     */
    private static function prepareJsonResponse($data): string
    {
        $response = [];

        if (is_array($data) && isset($data['message'])) {
            $response['message'] = $data['message'];
        } else {
            $dataKey = array_keys($data)[0] ?? null;

            if ($dataKey !== null && is_array(reset($data[$dataKey]))) {
                $response['data']['results'] = count($data[$dataKey]);
                $response['data'][$dataKey] = $data[$dataKey];
            } else {
                $response['data'] = $data;
            }
        }

        return json_encode($response);
    }
}

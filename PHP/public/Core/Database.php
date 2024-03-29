<?php

namespace App\Core;

use PDO;
use PDOException;

class Database
{
    private $connection;
    private $statement;
    private $config;

    public function __construct()
    {
        $this->loadConfig();
        $this->connectToDatabase();
    }

    private function loadConfig()
    {
        $configPath = __DIR__ . '/../config.php';
        $this->config = require($configPath);
    }

    private function connectToDatabase()
    {
        try {
            $dsn = "mysql:host={$this->config['database']['host']};dbname={$this->config['database']['dbname']}";
            $options = [
                PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
                PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
            ];
            $this->connection = new PDO($dsn, $this->config['database']['user'], $this->config['database']['password'], $options);
        } catch (PDOException $e) {
            $this->handleError('Database connection error', $e->getMessage());
        }
    }

    public function isConnected()
    {
        return ($this->connection instanceof PDO);
    }

    public function query($query, $params = [])
    {
        try {
            $this->prepareStatement($query);
            $this->executeStatement($params);
            return $this;
        } catch (PDOException $e) {
            $this->handleError('Database query error', $e->getMessage());
        }
    }

    private function prepareStatement($query)
    {
        $this->statement = $this->connection->prepare($query);
    }

    private function executeStatement($params)
    {
        if (is_array($params) && !empty($params)) {
            $this->statement->execute($params);
        } else {
            $this->statement->execute();
        }
    }

    public function get()
    {
        return $this->statement->fetchAll();
    }

    public function getOrFail()
    {
        $result = $this->statement->fetchAll();

        if (empty($result)) {
            Response::abort('Invalid request', 400);
        }

        return $result;
    }

    public function getOne()
    {
        return $this->statement->fetch();
    }

    public function getOneOrFail()
    {
        $result = $this->statement->fetch();

        if (!$result) {
            Response::abort('Invalid request', 400);
        }

        return $result;
    }

    private function handleError($errorMessage, $errorDetails = '')
    {
        http_response_code(500);
        header('Content-Type: application/json');

        $response = [
            'message' => $errorMessage,
        ];

        $this->handleDuplicateEntryError($errorDetails, $response);
        $this->handleIncorrectValueError($errorDetails, $response);

        if ($this->config['app']['env'] !== 'production') {
            $response['details'] = $errorDetails;
        }

        echo json_encode($response);
        exit;
    }

    private function handleDuplicateEntryError($errorDetails, &$response)
    {
        if (preg_match("/Duplicate entry '(.*?)' for key '(.*?)'/", $errorDetails, $matches)) {
            $value = $matches[1];
            $fieldName = strtoupper(preg_replace('/^[^.]+\\./', '', $matches[2]));

            if (!empty($fieldName)) {
                $response['message'] = "Duplicate value '$value' for field $fieldName";
            } else {
                $response['message'] = 'Duplicate value for a field.';
            }
        }
    }

    private function handleIncorrectValueError($errorDetails, &$response)
    {
        if (preg_match("/Incorrect (.*?) value: '(.*?)' for column '(.*?)'/", $errorDetails, $matches)) {
            $value = $matches[2];
            $fieldName = strtoupper($matches[3]);

            $response['message'] = "Incorrect value '$value' for field $fieldName";
        }
    }
}

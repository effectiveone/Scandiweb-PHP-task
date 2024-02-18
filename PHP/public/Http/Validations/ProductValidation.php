<?php

namespace App\Http\Validations;

use App\Core\DataType;
use App\Core\Response;

class ProductValidation
{
    public static function validateMandatoryFields(array $fields): void
    {
        $mandatoryFields = ['sku', 'name', 'price'];

        foreach ($mandatoryFields as $field) {
            self::validateField($fields, $field);
        }
    }

    private static function validateField(array $fields, string $field): void
    {
        if (!isset($fields[$field]) || empty($fields[$field])) {
            Response::abort("Missing or empty field: $field", 400);
        }

        switch ($field) {
            case 'price':
                self::validateNumericField($fields, $field);
                break;
            case 'name':
                self::validateStringField($fields, $field);
                break;
            case 'sku':
                self::validateAlphanumericField($fields, $field);
                break;
        }
    }

    private static function validateNumericField(array $fields, string $field): void
    {
        if (!is_numeric($fields[$field]) || $fields[$field] < 0) {
            Response::abort("Invalid data type for $field. Must be a non-negative number.", 400);
        }
    }

    private static function validateStringField(array $fields, string $field): void
    {
        if (!is_string($fields[$field]) || is_numeric($fields[$field])) {
            Response::abort("Invalid data type for $field. Must be a string.", 400);
        }
    }

    private static function validateAlphanumericField(array $fields, string $field): void
    {
        if (!ctype_alnum($fields[$field])) {
            Response::abort("Invalid value for $field. Must be alphanumeric.", 400);
        }
    }

    public static function validateProperties(array $properties, string $instanceTypeName, array $expectedProperties): void
    {
        if (count($properties) !== count($expectedProperties)) {
            Response::abort("{$instanceTypeName} properties must include: " . implode(', ', array_keys($expectedProperties)), 400);
        }

        foreach ($expectedProperties as $propName => $propType) {
            self::validateProperty($properties, $propName, $propType);
        }
    }

    private static function validateProperty(array $properties, string $propName, string $propType): void
    {
        if (!isset($properties[$propName])) {
            Response::abort("Missing property: $propName", 400);
        }

        if (!self::isValidType($properties[$propName], $propType)) {
            Response::abort("Invalid data type for property $propName. Expected: $propType", 400);
        }
    }

    public static function isValidType($value, $expectedType): bool
    {
        return $expectedType === DataType::NUMERIC ? is_numeric($value) : ($expectedType === DataType::STRING ? is_string($value) : false);
    }

    public static function validateIds(array $idArr): void
    {
        foreach ($idArr as $id) {
            if (!is_numeric($id) || $id <= 0) {
                Response::abort('Invalid product(s) ID.', 400);
            }
        }
    }
}

<?php

namespace App\Http\Controllers;

use App\Models\Product;
use App\Core\Response;

class TestController
{
    public function index()
    {
        $list = Product::getAll();
        Response::sendJsonResponse($list);
    }
}
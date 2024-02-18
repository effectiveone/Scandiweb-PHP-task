<?php

namespace App\Core;

class Router
{
    private $routes = [];

    // made add public incase we wanted to use it like this:
    // $router->add('GET', '/', 'controller.php');
    public function add($method, $uri, $handler)
    {
        $controller = null;
        $action = 'index';
    
        if ($handler instanceof \Closure) {
            $controller = $handler;
        } elseif (is_array($handler)) {
            $controller = $handler['controller'] ?? null;
            $action = $handler['action'] ?? 'index';
        } else {
            $controller = $handler;
        }
    
        if ($controller !== null) {
            $this->routes[] = [
                'method' => $method,
                'uri' => $uri,
                'controller' => $controller,
                'action' => $action,
            ];
        }
    
        return $this;
    }
    

    public function get($uri, $handler)
    {
        return $this->add('GET', $uri, $handler);
    }

    public function post($uri, $handler)
    {
        return $this->add('POST', $uri, $handler);
    }

    public function delete($uri, $handler)
    {
        return $this->add('DELETE', $uri, $handler);
    }

    public function patch($uri, $handler)
    {
        return $this->add('PATCH', $uri, $handler);
    }

    public function put($uri, $handler)
    {
        return $this->add('PUT', $uri, $handler);
    }

    public function route($uri, $method)
    {
        if (strpos($uri, '/api/') !== 0) {
            return require(base_path('public') . '/index.html');
        }
    
        foreach ($this->routes as $route) {
            if (
                $route['uri'] === $uri &&
                $route['method'] === strtoupper($method)
            ) {
                $controllerClass = get_controller_namespace($route['controller']);
                $action = $route['action'];
                try {
                    $controller = new $controllerClass();
                    $controller->$action();
                    exit;
                } catch (\Error) {
                    Response::abort('Not found');
                }
            }
        }
    
        Response::abort();
    }
}

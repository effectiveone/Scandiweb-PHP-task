<?php

namespace App\Core;

class Router
{
    private array $routes = [];

    public function add(string $method, string $uri, $handler): self
    {
        $route = $this->parseHandler($handler);

        if ($route['controller'] !== null) {
            $this->routes[] = [
                'method' => $method,
                'uri' => $uri,
                'controller' => $route['controller'],
                'action' => $route['action'],
            ];
        }

        return $this;
    }

    public function get(string $uri, $handler): self
    {
        return $this->add('GET', $uri, $handler);
    }

    public function post(string $uri, $handler): self
    {
        return $this->add('POST', $uri, $handler);
    }

    public function delete(string $uri, $handler): self
    {
        return $this->add('DELETE', $uri, $handler);
    }

    public function patch(string $uri, $handler): self
    {
        return $this->add('PATCH', $uri, $handler);
    }

    public function put(string $uri, $handler): self
    {
        return $this->add('PUT', $uri, $handler);
    }

    public function route(string $uri, string $method): void
    {
        if (strpos($uri, '/api/') !== 0) {
            require(base_path('public') . '/index.html');
            return;
        }

        foreach ($this->routes as $route) {
            if ($route['uri'] === $uri && $route['method'] === strtoupper($method)) {
                $this->invokeController($route['controller'], $route['action']);
            }
        }

        Response::abort();
    }

    private function parseHandler($handler): array
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

        return ['controller' => $controller, 'action' => $action];
    }

    private function invokeController(string $controller, string $action): void
    {
        $controllerClass = get_controller_namespace($controller);
        try {
            $controllerInstance = new $controllerClass();
            $controllerInstance->$action();
            exit;
        } catch (\Error) {
            Response::abort('Not found');
        }
    }
}

<?php

// autoload_static.php @generated by Composer

namespace Composer\Autoload;

class ComposerStaticInit9784dc5365ec54b79b99cb7a632e1b8d
{
    public static $prefixLengthsPsr4 = array (
        'A' => 
        array (
            'App\\' => 4,
        ),
    );

    public static $prefixDirsPsr4 = array (
        'App\\' => 
        array (
            0 => __DIR__ . '/../..' . '/public',
        ),
    );

    public static $classMap = array (
        'AltoRouter' => __DIR__ . '/..' . '/altorouter/altorouter/AltoRouter.php',
        'Composer\\InstalledVersions' => __DIR__ . '/..' . '/composer/InstalledVersions.php',
    );

    public static function getInitializer(ClassLoader $loader)
    {
        return \Closure::bind(function () use ($loader) {
            $loader->prefixLengthsPsr4 = ComposerStaticInit9784dc5365ec54b79b99cb7a632e1b8d::$prefixLengthsPsr4;
            $loader->prefixDirsPsr4 = ComposerStaticInit9784dc5365ec54b79b99cb7a632e1b8d::$prefixDirsPsr4;
            $loader->classMap = ComposerStaticInit9784dc5365ec54b79b99cb7a632e1b8d::$classMap;

        }, null, ClassLoader::class);
    }
}
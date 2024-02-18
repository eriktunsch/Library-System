<?php

namespace de\eriktunsch\basket\utils;

class Cookies
{
    public function unset_cookie($name)
    {
        $host = $_SERVER['HTTP_HOST'];
        $domain = explode(':', $host)[0];
    
        $uri = $_SERVER['REQUEST_URI'];
        $uri = rtrim(explode('?', $uri)[0], '/');
    
        if ($uri && !filter_var('file://' . $uri, FILTER_VALIDATE_URL)) {
            error_log('invalid uri: ' . $uri);
        }
    
        $parts = explode('/', $uri);
    
        $cookiePath = '';
        foreach ($parts as $part) {
            $cookiePath = '/' . ltrim($cookiePath . '/' . $part, '//');
    
            setcookie($name, '', 1, $cookiePath);
    
            $_domain = $domain;
            do {
                setcookie($name, '', 1, $cookiePath, $_domain);
            } while (strpos($_domain, '.') !== false && $_domain = substr($_domain, 1 + strpos($_domain, '.')));
        }
    }

    public function setCookie($name, $value, $time, $url)
    {
        setcookie($name, $value, $time, $url);
    }
}

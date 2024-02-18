<?php
require 'defines.php';
require 'composer/vendor/autoload.php';
require 'de/eriktunsch/basket/autoloader.class.php';
//ini_set('display_errors', 1);
//ini_set('display_startup_errors', 1);
//error_reporting(E_ALL);
session_start();

(new Loader())->registerNamespaces([
    'de' => __DIR__ . DIRECTORY_SEPARATOR . 'de'
])->register();

$Settings = new \de\eriktunsch\basket\utils\Settings();
$Headline = new \de\eriktunsch\basket\utils\html\Headline();
$Modal = new \de\eriktunsch\basket\utils\html\Modal();
$MessageContainer = new \de\eriktunsch\basket\utils\html\MessageContainer();
$LoadResource = new \de\eriktunsch\basket\utils\LoadResource();
$Table = new \de\eriktunsch\basket\utils\html\Table();
$ArraySearch = new \de\eriktunsch\basket\utils\ArraySearch();
$StringUtils = new \de\eriktunsch\basket\utils\StringUtils();
$Cookies = new \de\eriktunsch\basket\utils\Cookies();
$Client = new \de\eriktunsch\basket\utils\Client();
$Variable = new \de\eriktunsch\basket\utils\Variable();
$User = new \de\eriktunsch\basket\user\User();
$Login = new \de\eriktunsch\basket\user\Login();
$Geo = new \de\eriktunsch\basket\utils\Geo();

if ($Settings->getSettings("maintenance") == "true") {
    if (!in_array($Client->getIP(), json_decode($Settings->getSettings("maintenance_ignore")))) {
        echo '<script type="text/javascript">';
        echo 'window.location.href="https://' . $Settings->getSettings('url') . '/maintenance";';
        echo '</script>';
    }
}

$db = new mysqli($Variable->getGlobalVar("dbhost"), $Variable->getGlobalVar("dbuser"), $Variable->getGlobalVar("dbpass"), $Variable->getGlobalVar("dbdb"));

<?php

use de\eriktunsch\library\utils\MysqlConnector;

require 'defines.php';
require 'composer/vendor/autoload.php';
require 'de/eriktunsch/library/autoloader.class.php';
//ini_set('display_errors', 1);
//ini_set('display_startup_errors', 1);
//error_reporting(E_ALL);
session_start();

(new Loader())->registerNamespaces([
    'de' => __DIR__ . DIRECTORY_SEPARATOR . 'de'
])->register();

$Settings = new \de\eriktunsch\library\utils\Settings();
$Headline = new \de\eriktunsch\library\utils\html\Headline();
$Modal = new \de\eriktunsch\library\utils\html\Modal();
$MessageContainer = new \de\eriktunsch\library\utils\html\MessageContainer();
$LoadResource = new \de\eriktunsch\library\utils\LoadResource();
$Table = new \de\eriktunsch\library\utils\html\Table();
$ArraySearch = new \de\eriktunsch\library\utils\ArraySearch();
$StringUtils = new \de\eriktunsch\library\utils\StringUtils();
$Cookies = new \de\eriktunsch\library\utils\Cookies();
$Client = new \de\eriktunsch\library\utils\Client();
$Variable = new \de\eriktunsch\library\utils\Variable();
$User = new \de\eriktunsch\library\user\User();
$Login = new \de\eriktunsch\library\user\Login();

if ($Settings->getSettings("maintenance") == "true") {
    if (!in_array($Client->getIP(), json_decode($Settings->getSettings("maintenance_ignore")))) {
        echo '<script type="text/javascript">';
        echo 'window.location.href="https://' . $Settings->getSettings('url') . '/maintenance";';
        echo '</script>';
    }
}

$db = (new MysqlConnector())->getConnection($Variable->getGlobalVar("dbhost"), $Variable->getGlobalVar("dbuser"), $Variable->getGlobalVar("dbpass"), $Variable->getGlobalVar("dbdb"));
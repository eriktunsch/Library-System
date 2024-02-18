<?php

namespace de\eriktunsch\library\utils;

use \de\eriktunsch\library\utils\StringUtils;
use \de\eriktunsch\library\utils\Settings;

class LoadResource
{
    public function insertCSS($path, $firstload = false, $external = false)
    {
        $Settings = new Settings();

        if (!$external) {
            if ($Settings->getSettings("cache") == "false") {
                $StringUtils = new StringUtils();

                if ($firstload) {
                    $returner = '<link rel=\'stylesheet\' href="https://' . $Settings->getSettings("url") . '/styles.php?style=' . base64_encode($path) . '&random=' . $StringUtils->randomString(40) . '" />';
                } else {
                    $returner = '<script>$(document).ready(function() {
                    $("head").append($("<link rel=\'stylesheet\' href=\'https://' . $Settings->getSettings("url") . '/styles.php?style=' . base64_encode($path) . '&random=' . $StringUtils->randomString(40) . '\' />"));        
                });</script>';
                }
            } else {
                $StringUtils = new StringUtils();

                if ($firstload) {
                    $returner = '<link rel=\'stylesheet\' href="https://' . $Settings->getSettings("url") . '/styles.php?style=' . base64_encode($path) . '" />';
                } else {
                    $returner = '<script>$(document).ready(function() {
                    $("head").append($("<link rel=\'stylesheet\' href=\'https://' . $Settings->getSettings("url") . '/styles.php?style=' . base64_encode($path) . '\' />"));        
                });</script>';
                }
            }
        } else {
            if ($firstload) {
                $returner = '<link rel=\'stylesheet\' href="' . $path . '" />';
            } else {
                $returner = '<script>$(document).ready(function() {
                    $("head").append($("<link rel=\'stylesheet\' href=\'' . $path . '\' />"));        
                });</script>';
            }
        }

        return $returner;
    }

    public function insertJS($path, $firstload = false, $external = false)
    {
        $Settings = new Settings();
        if (!$external) {
            if ($Settings->getSettings("cache") == "false") {
                $StringUtils = new StringUtils();
                if ($firstload) {
                    $returner = '<script type="text/javascript" src="https://' . $Settings->getSettings("url") . '/scripts.php?script=' . base64_encode($path) . '&random=' . $StringUtils->randomString(40) . '"></script>';
                } else {
                    $returner = '<script type="text/javascript" src="https://' . $Settings->getSettings("url") . '/scripts.php?script=' . base64_encode($path) . '&random=' . $StringUtils->randomString(40) . '" defer></script>';
                }
            } else {
                $StringUtils = new StringUtils();
                if ($firstload) {
                    $returner = '<script type="text/javascript" src="https://' . $Settings->getSettings("url") . '/scripts.php?script=' . base64_encode($path) . '"></script>';
                } else {
                    $returner = '<script type="text/javascript" src="https://' . $Settings->getSettings("url") . '/scripts.php?script=' . base64_encode($path) . '" defer></script>';
                }
            }
        } else {
            if ($firstload) {
                $returner = '<script type="text/javascript" src="' . $path . '"></script>';
            } else {
                $returner = '<script type="text/javascript" src="' . $path . '" defer></script>';
            }
        }
        return $returner;
    }
}

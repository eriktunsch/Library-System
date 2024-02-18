<?php

use \de\eriktunsch\library\user\User;
use LdapRecord\Container;
use LdapRecord\Connection;
use LdapRecord\Models\Entry;

include('../php/server.php');
?>

<!DOCTYPE html>
<?php echo "<script type='text/javascript'>window.url = '" . $Settings->getSettings('url') . "'</script>"; ?>
<html lang="en">

<head>

    <meta name="robots" content="index" />
    <meta name="audience" content="Alle" />
    <meta name="page-type" content="Humboldt-Makerspace library" />
    <meta name="page-topic" content="Humboldt-Makerspace library" />
    <meta name="revisit-after" content="2 days">
    <meta name="copyright" content="Erik Tunsch">
    <meta name="author" content="Erik Tunsch">
    <meta name="Handheldfriendly" content="true">

    <meta content="text/html; charset=UTF-8" http-equiv="Content-Type" />
    <meta http-equiv="x-ua-compatible" content="ie=edge">
    <meta name="mobile-web-app-capable" content="yes">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="referrer" content="always">
    <link rel="icon" type="image/png" sizes="16x16" href="/Logos/favicon-16x16.png">
    <link rel="icon" type="image/png" sizes="32x32" href="/Logos/favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="96x96" href="/Logos/favicon-96x96.png">
    <link rel="icon" type="image/png" sizes="192x192" href="/Logos/android-icon-192x192.png">
    <link rel="apple-touch-icon" sizes="57x57" href="/Logos/apple-icon-57x57.png">
    <link rel="apple-touch-icon" sizes="60x60" href="/Logos/apple-icon-60x60.png">
    <link rel="apple-touch-icon" sizes="72x72" href="/Logos/apple-icon-72x72.png">
    <link rel="apple-touch-icon" sizes="76x76" href="/Logos/apple-icon-76x76.png">
    <link rel="apple-touch-icon" sizes="114x114" href="/Logos/apple-icon-114x114.png">
    <link rel="apple-touch-icon" sizes="120x120" href="/Logos/apple-icon-120x120.png">
    <link rel="apple-touch-icon" sizes="144x144" href="/Logos/apple-icon-144x144.png">
    <link rel="apple-touch-icon" sizes="152x152" href="/Logos/apple-icon-152x152.png">
    <link rel="apple-touch-icon" sizes="180x180" href="/Logos/apple-icon-180x180.png">
    <link rel="apple-touch-startup-image" href="/images/logo_icon.png">
    <meta name="msapplication-TileColor" content="#ffffff">
    <meta name="msapplication-TileImage" content="/Logos/ms-icon-144x144.png">
    <link rel="manifest" href="/Logos/manifest.json">

    <meta name="theme-color" content="#ffffff">
    <?php echo $LoadResource->insertJS("external/ajax.js"); ?>
    <?php echo $LoadResource->insertJS("external/jquery.js", true); ?>
    <?php echo $LoadResource->insertJS("external/popper.js"); ?>
    <?php echo $LoadResource->insertJS("external/bootstrap.js"); ?>
    <?php echo $LoadResource->insertJS("external/mdb.js"); ?>
    <?php echo $LoadResource->insertJS("external/izitoast.js"); ?>
    <?php echo $LoadResource->insertJS("external/sweetalert.js"); ?>

    <?php echo $LoadResource->insertCSS("external/bootstrap.css", true); ?>
    <?php echo $LoadResource->insertCSS("external/loadbar.css"); ?>
    <?php echo $LoadResource->insertCSS("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css", false, true); ?>
    <?php echo $LoadResource->insertCSS("external/izitoast.css"); ?>
    <?php echo $LoadResource->insertCSS("external/mdb.css"); ?>
    <?php echo $LoadResource->insertCSS("kiosk.css", true); ?>
    <?php echo $LoadResource->insertCSS("main.css", true); ?>
    <?php echo $LoadResource->insertCSS("external/sweetalert.css"); ?>


    <title>Humboldt-Makerspace library - Kiosk 1</title>
</head>

<body style="width: 100%;background: #fff; background-size: cover;" id="top">

    <div style="background:#f1f1f1; position:fixed; height: 100vh; width: 100vw; z-index: 100;" id="waiter">
        <div style="position: absolute;left: 50%; top: 50%; -webkit-transform: translate(-50%, -50%); transform: translate(-50%, -50%);">
            <div class="loader">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
        <button class="btn btn-outline-primary btn-rounded z-depth-0 mt-2 waves-effect" type="button" id="connect">Connect</button>
    </div>
    <section class="h-100 gradient-custom" style="min-height:100vh">
        <div class="py-5" style="padding-left: 4%; padding-right: 4%">
            <div class="row d-flex justify-content-center my-4">
                <div class="col-md-8" style="height:85vh">
                    <div class="mb-4" style='height: 100%; overflow-y: auto; background: #f1f1f1; box-shadow: 0px 0px 8px 0px rgba(0,0,0,0.5); margin: 0 auto; border-bottom-left-radius: 15px; border-bottom-right-radius: 15px;'>
                        <div style="background: #78A6C9; width: 100%; padding: 8px 0px 5px 10px;color: white; margin-bottom: 15px;">
                            <p style="font-size: 20px; margin-bottom: 0px"><i class="fa-solid fa-shop" style="margin-right: 5px;"></i>Humboldt-Makerspace Kiosk</p>
                        </div>
                        <div id="scan-animation" style="position: absolute;left: 50%; top: 50%; -webkit-transform: translate(-50%, -50%); transform: translate(-50%, -50%);">
                            <div class='anim-box center'>
                                <!-- empty first child used for corners -->
                                <div></div>
                                <div class='scanner'></div>
                                <div class='anim-item anim-item-sm'></div>
                                <div class='anim-item anim-item-lg'></div>
                                <div class='anim-item anim-item-lg'></div>
                                <div class='anim-item anim-item-sm'></div>
                                <div class='anim-item anim-item-lg'></div>
                                <div class='anim-item anim-item-sm'></div>
                                <div class='anim-item anim-item-md'></div>
                                <div class='anim-item anim-item-sm'></div>
                                <div class='anim-item anim-item-md'></div>
                                <div class='anim-item anim-item-lg'></div>
                                <div class='anim-item anim-item-sm'></div>
                                <div class='anim-item anim-item-sm'></div>
                                <div class='anim-item anim-item-lg'></div>
                                <div class='anim-item anim-item-sm'></div>
                                <div class='anim-item anim-item-lg'></div>
                                <div class='anim-item anim-item-sm'></div>
                                <div class='anim-item anim-item-lg'></div>
                                <div class='anim-item anim-item-sm'></div>
                                <div class='anim-item anim-item-md'></div>
                            </div>
                        </div>
                        <div class="card-body" id="cart">
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="mb-4" style='background: #f1f1f1; box-shadow: 0px 0px 8px 0px rgba(0,0,0,0.5); margin: 0 auto; border-bottom-left-radius: 15px; border-bottom-right-radius: 15px;'>
                        <div style="background: #78A6C9; width: 100%; padding: 8px 0px 5px 10px;color: white; margin-bottom: 15px;">
                            <p style="font-size: 20px; margin-bottom: 0px"><i class="fa-solid fa-user-tag" style="margin-right: 5px;"></i>angemeldeter Nutzer</p>
                        </div>
                        <div class="card-body">
                            <h1 style='font-weight: bold; text-align: center' id="fullname"></h1>
                            <p style="text-align:center" id="username"></p>
                        </div>
                    </div>

                    <div class="mb-4" style='background: #f1f1f1; box-shadow: 0px 0px 8px 0px rgba(0,0,0,0.5); margin: 0 auto; border-bottom-left-radius: 15px; border-bottom-right-radius: 15px;'>
                        <div style="background: #78A6C9; width: 100%; padding: 8px 0px 5px 10px;color: white; margin-bottom: 15px;">
                            <p style="font-size: 20px; margin-bottom: 0px"><i class="fa-solid fa-dollar-sign" style="margin-right: 5px;"></i>aktuelles Guthaben</p>
                        </div>
                        <div class="card-body">
                            <h1 style='font-weight: bold; text-align: center' class="mb-3" id="balance"></h1>
                        </div>
                    </div>

                    <div class="mb-4" style='background: #f1f1f1; box-shadow: 0px 0px 8px 0px rgba(0,0,0,0.5); margin: 0 auto; border-bottom-left-radius: 15px; border-bottom-right-radius: 15px;'>
                        <div style="background: #78A6C9; width: 100%; padding: 8px 0px 5px 10px;color: white; margin-bottom: 15px;">
                            <p style="font-size: 20px; margin-bottom: 0px"><i class="fa-regular fa-credit-card" style="margin-right: 5px;"></i>Zusammenfassung (<span id="item_count">0 Produkte</span>)</p>
                        </div>
                        <div class="card-body">
                            <ul class="list-group list-group-flush">
                                <li class="d-flex justify-content-between align-items-center border-0 px-0 pb-0 mb-3">
                                    Produkte
                                    <span class="total_price">0.00 Euro</span>
                                </li>
                                <li class="d-flex justify-content-between align-items-center px-0 mb-3">
                                    Versand
                                    <span>Gratis</span>
                                </li>
                                <li class="d-flex justify-content-between align-items-center border-0 px-0 mb-3 mt-3">
                                    <div>
                                        <strong>Gesamtpreis</strong>
                                        <strong>
                                            <p class="mb-0">(HMSSt. inklusive)</p>
                                        </strong>
                                    </div>
                                    <span><strong class="total_price">0.00 Euro</strong></span>
                                </li>
                            </ul>
                            <div class="row d-flex justify-content-center">
                                <div class="col-md-12">
                                    <button class="btn btn-outline-primary btn-block btn-rounded mt-4 z-depth-0 waves-effect" type="button" onclick="checkout()">Checkout</button>
                                </div>
                                <div class="col-md-12">
                                    <button class="btn btn-outline-danger btn-block btn-rounded mt-4 z-depth-0 waves-effect" type="button" onclick="cancel()">Abbruch</button>
                                </div>
                                </diov>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
    </section>

    <?php echo $LoadResource->insertJS("intern/kiosk.js"); ?>
    <?php echo $LoadResource->insertJS("request.js"); ?>
</body>

</html>
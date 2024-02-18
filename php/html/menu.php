<!DOCTYPE html>
<?php echo "<script type='text/javascript'>window.url = '" . $Settings->getSettings('url') . "'</script>"; ?>
<html lang="en">

<head>

  <meta name="robots" content="index" />
  <meta name="audience" content="Alle" />
  <meta name="page-type" content="Humboldt-Makerspace Basket" />
  <meta name="page-topic" content="Humboldt-Makerspace Basket" />
  <meta name="revisit-after" content="2 days">
  <meta name="copyright" content="Erik Tunsch">
  <meta name="author" content="Erik Tunsch">
  <meta name="Handheldfriendly" content="true">

  <meta content="text/html; charset=UTF-8" http-equiv="Content-Type" />
  <meta http-equiv="x-ua-compatible" content="ie=edge">
  <meta name="mobile-web-app-capable" content="yes">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="referrer" content="always">

  <link rel="apple-touch-icon" sizes="180x180" href="/Logos/apple-touch-icon.png">
  <link rel="icon" type="image/png" sizes="32x32" href="/Logos/favicon-32x32.png">
  <link rel="icon" type="image/png" sizes="16x16" href="/Logos/favicon-16x16.png">
  <link rel="manifest" href="/Logos/site.webmanifest">
  <link rel="mask-icon" href="/Logos/safari-pinned-tab.svg" color="#5bbad5">
  <link rel="shortcut icon" href="/Logos/favicon.ico">
  <meta name="msapplication-TileColor" content="#da532c">
  <meta name="msapplication-config" content="/Logos/browserconfig.xml">
  <meta name="theme-color" content="#ffffff">

  <meta name="theme-color" content="#ffffff">

  <?php echo $LoadResource->insertJS("https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js", true, true); ?>
  <?php echo $LoadResource->insertJS("external/ajax.js"); ?>
  <?php echo $LoadResource->insertJS("external/popper.js"); ?>
  <?php echo $LoadResource->insertJS("external/bootstrap.js"); ?>
  <?php echo $LoadResource->insertJS("external/datatables.js", true); ?>
  <?php echo $LoadResource->insertJS("external/mdb.js"); ?>
  <?php echo $LoadResource->insertJS("external/izitoast.js"); ?>
  <?php echo $LoadResource->insertJS("external/sweetalert.js"); ?>

  <?php echo $LoadResource->insertJS("header/menu.js"); ?>
  <?php echo $LoadResource->insertJS("https://d3js.org/d3.v4.js", false, true); ?>

  <?php echo $LoadResource->insertCSS("external/bootstrap.css", true); ?>
  <?php echo $LoadResource->insertCSS("external/loadbar.css"); ?>
  <?php echo $LoadResource->insertCSS("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css", false, true); ?>
  <?php echo $LoadResource->insertCSS("external/chart.css"); ?>
  <?php echo $LoadResource->insertCSS("external/izitoast.css"); ?>
  <?php echo $LoadResource->insertCSS("external/mdb.css"); ?>
  <?php echo $LoadResource->insertCSS("main.css", true); ?>
  <?php echo $LoadResource->insertCSS("external/datatables.css", true); ?>
  <?php echo $LoadResource->insertCSS("external/sweetalert.css"); ?>
  <?php echo $LoadResource->insertCSS("external/maps.css"); ?>
  <?php echo $LoadResource->insertCSS("https://unpkg.com/filepond-plugin-get-file/dist/filepond-plugin-get-file.css", true, true); ?>

  <?php echo $LoadResource->insertJS("external/maps.js"); ?>
  <?php echo $LoadResource->insertJS("external/moment.js"); ?>

</head>

<body style="width: 100%;background: #f5f5f5; min-height: 100vh" id="top">
  <header style="z-index: 9999; position: fixed">
    <div class="nav-wrapper">
      <div class="grad-bar"></div>
      <nav class="navbar">
        <img src="/images/logo.png" alt="<?php echo $Settings->getSettings("html_title"); ?>">
        <div class="menu-toggle" id="mobile-menu">
          <span class="bar"></span>
          <span class="bar"></span>
          <span class="bar"></span>
        </div>
        <ul class="nav no-search">
          <li class="nav-item"><a href="/"><i class="fa-solid fa-home"></i> Home</a></li>
          <?php if ($Login->isLoggedin()) { ?>
            <?php if ($User->isAdmin()) { ?>
              <li class="nav-item"><a href="/admin/"><i class="fa-solid fa-gear"></i> Admin</a></li>
            <?php } ?>

            <li class="nav-item" style="margin-right: 0px;"><a href="/logout/" style="color: red"><i class="fa-solid fa-right-from-bracket"></i> Logout</a></li>
          <?php } ?>
        </ul>
      </nav>
    </div>
  </header>
  <div id="content" class="wrapper" style="transition-duration: 0.5s; background: #e6e6e6; min-height: 100vh">
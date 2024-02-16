<?php

include('php/server.php');
if (!$Login->isLoggedin()) {
  $actual_link = "https://{$_SERVER['HTTP_HOST']}{$_SERVER['REQUEST_URI']}";
  echo "<meta http-equiv='refresh' content='0; URL=/login/index.php?ref=" . $actual_link . "'>";
  die;
}
include('php/html/menu.php'); ?>
<title><?php echo $Settings->getSettings("html_title"); ?> - Home</title>

<br>
<br>
<br>
<div style="transition-duration: 0.5s; max-width: 90% !important; margin: 0 auto">

  <div class="row" style="vertical-align: middle">
    <div class='col-lg col-md-6 col-sm-6 mb-4 text-center' style='background-color: #fff; border-radius: 0px 40px 0px 40px; margin: 15px; margin-left: 0px; min-height: 8.7rem;box-shadow: 0 .46875rem 2.1875rem rgba(90,97,105,.1),0 .9375rem 1.40625rem rgba(90,97,105,.1),0 .25rem .53125rem rgba(90,97,105,.12),0 .125rem .1875rem rgba(90,97,105,.1);'>
      <div style='padding: 30px;vertical-align: middle'>
        <i class='fa-solid fa-money-bill fa-3x' style='padding-bottom: 8px'></i>
        <?php $balance = $db->query('SELECT balance FROM wallet WHERE uid="' . $_SESSION["username"] . '"')->fetch_object()->balance;
        ?>
        <h1 style='font-weight: bold' class='counting' data-count='<?php echo $balance; ?>' data-text=' Euro'></h1>
        <p>aktuelles Guthaben</p>
      </div>
    </div>
    <div class='col-lg col-md-6 col-sm-6 mb-4 text-center' style='background-color: #fff; border-radius: 0px 40px 0px 40px; margin: 15px; margin-right: 0px; min-height: 8.7rem;box-shadow: 0 .46875rem 2.1875rem rgba(90,97,105,.1),0 .9375rem 1.40625rem rgba(90,97,105,.1),0 .25rem .53125rem rgba(90,97,105,.12),0 .125rem .1875rem rgba(90,97,105,.1);'>
      <div style='padding: 30px;vertical-align: middle'>
        <i class='fa-solid fa-rotate fa-3x' style='padding-bottom: 8px'></i>
        <?php $buys = $db->query('SELECT count(*) as a FROM history WHERE `user`="' . $_SESSION["username"]. '" GROUP BY `date`')->num_rows; ?>
        <h1 style='font-weight: bold' class='counting' data-count='<?php echo $buys; ?>' data-text=''></h1>
        <p>Einkäufe</p>
      </div>
    </div>
  </div>

  <div style='background: #f1f1f1; box-shadow: 0px 0px 8px 0px rgba(0,0,0,0.5); margin: 0 auto; ; border-radius: 15px; margin-top: 25px;'>
    <div style="background: #5E24C3; width: 100%; padding: 8px 0px 5px 10px;color: white; margin-bottom: 15px;">
      <p style="font-size: 20px; margin-bottom: 0px"><i class="fa-regular fa-credit-card" style="margin-right: 5px;"></i>Einkaushistorie</p>
    </div>
    <div style="padding: 15px">
      <?php
      echo $Table->printTableHead("table-history", array("Datum", "Bild", "Artikel", "Preis", "Anzahl"));
      echo $Table->printTableFooter(); ?>
    </div>
  </div>
  <?php
  echo $LoadResource->insertJS("intern/home.js");

  ?>

</div>

<?php
include('php/html/footer.php'); ?>
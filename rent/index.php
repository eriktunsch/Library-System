<?php

use de\eriktunsch\library\utils\html\MessageContainer;

include('../php/server.php');
if (!$Login->isLoggedin()) {
  $actual_link = "https://{$_SERVER['HTTP_HOST']}{$_SERVER['REQUEST_URI']}";
  echo "<meta http-equiv='refresh' content='0; URL=/login/?ref=" . $actual_link . "'>";
  die;
}
$title = "Ausleih / Rückgabe";
include('../php/html/menu.php'); ?>

<div class="row d-flex justify-content-center">
  <div class="col-md-8">
    <div class="card" style="min-height: 75vh">
      <div class="card-header">
        <div class="header-title">
          <h4 class="card-title">Ausleih / Rückgabe</h4>
        </div>
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
    <div class="card">
      <div class="card-header">
        <div class="header-title">
          <h4 class="card-title">Zusammenfassung</h4>
        </div>
      </div>
      <div class="card-body">
        <ul class="list-group list-group-flush">
          <li class="d-flex justify-content-between align-items-center border-0 px-0 pb-0 mb-3">
            Artikel zum Ausleihen
            <span id="rent_count">0</span>
          </li>
          <li class="d-flex justify-content-between align-items-center px-0 mb-3">
            Artikel zum Zurückgeben
            <span id="return_count">0</span>
          </li>
          <li class="d-flex justify-content-between align-items-center border-0 px-0 mb-3 mt-3">
            <div>
              <strong>spätestes Rückgabedatum</strong>
            </div>
            <span><strong><?php
                          $twoWeeks = new DateTime();
                          $twoWeeks->modify('+14 days');
                          echo $twoWeeks->format('d.m.Y');  ?></strong></span>
          </li>
        </ul>
        <div class="row d-flex justify-content-center">
          <div class="col-md-6">
            <button class="btn btn-soft-primary btn-block btn-rounded mt-4 z-depth-0 waves-effect w-100" type="button" onclick="checkout()">Checkout</button>
          </div>
          <div class="col-md-6">
            <button class="btn btn-soft-danger btn-block btn-rounded mt-4 z-depth-0 waves-effect w-100" type="button" onclick="cancel()">Abbruch</button>
          </div>
          </diov>
        </div>
      </div>
    </div>

  </div>
</div>

<?php echo $LoadResource->insertJS("intern/kiosk.js");
?>

<?php
include('../php/html/footer.php'); ?>
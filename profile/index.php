<?php

use de\eriktunsch\library\user\User;
use de\eriktunsch\library\utils\html\MessageContainer;

$title = "Profil";
include('../php/server.php');
if (!$Login->isLoggedin()) {
  $actual_link = "https://{$_SERVER['HTTP_HOST']}{$_SERVER['REQUEST_URI']}";
  echo "<meta http-equiv='refresh' content='0; URL=/login/?ref=" . $actual_link . "'>";
  die;
}
include('../php/html/menu.php');

$current_user = $User->getId();

if (isset($_GET["u"]) && $User->isAdmin()) {
  $current_user = (new User($_GET["u"]))->getId();
} ?>
<script>var user = "<?php echo $current_user; ?>"</script>
<div class="row">
  <div class="col-lg-8">
    <div class="card">
      <div class="card-header">
        <div class="header-title">
          <h4 class="card-title">Ausleihen</h4>
        </div>
      </div>
      <div class="card-body">
        <?php echo $Table->printTableHead("rents-table", array("Zurückgegeben", "Buch", "Person", "Ausgeliehen", "Fälligkeit")); ?>
        <?php echo $Table->printTableFooter(); ?>
      </div>
    </div>
  </div>
  <div class="col-lg-4">
    <div class="card">
      <div class="card-header">
        <div class="header-title">
          <h4 class="card-title">Markliste</h4>
        </div>
      </div>
      <div class="card-body">
        <?php echo $Table->printTableHead("marks-table", array("Verfügbarkeit", "Buch", "hinzugefügt", "")); ?>
        <?php echo $Table->printTableFooter(); ?>
      </div>
    </div>
  </div>
</div>
<?php echo $LoadResource->insertJS("intern/profile.js");

?>

<?php
include('../php/html/footer.php'); ?>
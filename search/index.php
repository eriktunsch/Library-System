<?php

use de\eriktunsch\library\utils\html\MessageContainer;

$title = "Suche";
include('../php/server.php');
if (!$Login->isLoggedin()) {
  $actual_link = "https://{$_SERVER['HTTP_HOST']}{$_SERVER['REQUEST_URI']}";
  echo "<meta http-equiv='refresh' content='0; URL=/login/?ref=" . $actual_link . "'>";
  die;
}
include('../php/html/menu.php'); ?>

  <div class="card">
    <div class="card-header">
      <div class="header-title">
        <h4 class="card-title">vorhandene Bücher</h4>
      </div>
    </div>
    <div class="card-body">
      <?php echo $Table->printTableHead("books-table", array("Verfügbarkeit", "Titel", "Genres", "Autoren", "Verlag", "")); ?>
      <?php echo $Table->printTableFooter(); ?>
    </div>
  </div>


  <?php
  $genres = array();
  $genres_ = "";
  $authors = array();
  $authors_ = "";
  $publishers = array();
  $publishers_ = "";
  $stmt = $db->query('SELECT genres FROM books');

  while (($obj = $stmt->fetch_object()) != null) {
    $json = json_decode($obj->genres, true);
    for ($i = 0; $i < count($json); $i++) {
      if (!in_array($json[$i], $genres)) {
        array_push($genres, $json[$i]);

        $genres_ .= '{
          label: "' . $json[$i] . '",
          value: function (rowData, rowIdx) {
              return rowData[2].includes("' . $json[$i] . '");
          }
          },';
      }
    }
  }

  $stmt = $db->query('SELECT authors FROM books');

  while (($obj = $stmt->fetch_object()) != null) {
    $json = json_decode($obj->authors, true);
    for ($i = 0; $i < count($json); $i++) {
      if (!in_array($json[$i], $authors)) {
        array_push($authors, $json[$i]);

        $authors_ .= '{
          label: "' . $json[$i] . '",
          value: function (rowData, rowIdx) {
              return rowData[3].includes("' . $json[$i] . '");
          }
          },';
      }
    }
  }

  $stmt = $db->query('SELECT publisher FROM books');

  while (($obj = $stmt->fetch_object()) != null) {
    if (!in_array($obj->publisher, $publishers)) {
      array_push($publishers, $obj->publisher);

      $publishers_ .= '{
          label: "' . $obj->publisher . '",
          value: function (rowData, rowIdx) {
              return rowData[4].includes("' . $obj->publisher . '");
          }
          },';
    }
  } ?>
  <script>
    var authors = [<?php echo $authors_; ?>];
    var genres = [<?php echo $genres_; ?>];
    var publishers = [<?php echo $publishers_; ?>];
  </script>
<?php echo $LoadResource->insertJS("intern/search.js");
?>

<?php
include('../php/html/footer.php'); ?>
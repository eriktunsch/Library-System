<?php

use de\eriktunsch\library\utils\html\MessageContainer;

$title = "Verwaltung";
include('../php/server.php');
if (!$Login->isLoggedin()) {
  $actual_link = "https://{$_SERVER['HTTP_HOST']}{$_SERVER['REQUEST_URI']}";
  echo "<meta http-equiv='refresh' content='0; URL=/login/?ref=" . $actual_link . "'>";
  die;
}
include('../php/html/menu.php');

if (!$User->isAdmin()) {
  echo (new MessageContainer())->displayMessageContainer("danger", "Keine Berechtigung!", "Sie besitze keine Berechtigungen, um auf diese Seite zuzugreifen.", "Bitte stellen Sie sicher, dass Sie mit dem korrekten Account eingeloggt sind.");
} else { ?>
  <div class="row">
    <div class="col-lg-12">
      <div class="card">
        <div class="card-body">
          <div class="d-flex flex-wrap align-items-center justify-content-between">
            <ul class="d-flex nav nav-pills mb-0 text-center profile-tab" data-toggle="slider-tab" id="profile-pills-tab" role="tablist">
              <li class="nav-item">
                <a class="nav-link active show" data-bs-toggle="tab" href="#admin-books" role="tab" aria-selected="false">Bücher</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="col-lg-12">
      <div class="tab-content">
        <div id="admin-books" class="tab-pane fade active show">
          <div class="row">
            <div class="col-xl-4">
              <div class="card">
                <div class="card-header">
                  <div class="header-title">
                    <h4 class="card-title">Buch hinzufügen</h4>
                  </div>
                </div>
                <div class="card-body">
                  <div class="row mb-3">
                    <div class="col">
                      <button type="button form-control" id="startScan" class="btn btn-soft-success w-100" onclick="startScan()">Scan starten</button>
                      <button type="button form-control" id="stopScan" class="btn btn-soft-danger w-100 d-none" onclick="stopScan()">Scan stoppen</button>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col">
                      <div class="form-floating custom-form-floating form-group mb-3">
                        <input type="number" class="form-control" id="isbn" placeholder="ISBN">
                        <label for="isbn">ISBN</label>
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col">
                      <div class="form-floating custom-form-floating form-group mb-3">
                        <input type="text" class="form-control" id="title" placeholder="Titel">
                        <label for="title">Titel</label>
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col">
                      <div class="form-floating custom-form-floating form-group mb-3">
                        <input type="text" class="form-control" id="subtitle" placeholder="Untertitel">
                        <label for="subtitle">Untertitel</label>
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col">
                      <div class="form-floating custom-form-floating form-group mb-3">
                        <input type="text" class="form-control" id="publisher" placeholder="Verlag">
                        <label for="publisher">Verlag</label>
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-8">
                      <div class="form-floating custom-form-floating form-group mb-3">
                        <input type="text" class="form-control date_flatpicker" id="publish" placeholder="Veröffentlichung">
                        <label for="publish">Veröffentlichung</label>
                      </div>
                    </div>
                    <div class="col-4">
                      <div class="form-floating custom-form-floating form-group mb-3">
                        <input type="number" class="form-control" id="pages" placeholder="Seiten">
                        <label for="pages">Seiten</label>
                      </div>
                    </div>
                  </div>
                  <div class="input-group mb-3">
                    <span class="input-group-text" id="basic-addon1">Autoren</span>
                    <div class="tags-input form-control tag-bg-primary" data-splitchars="[;']" id="authors_i" data-id="authors" data-name="authors"></div>
                  </div>
                  <div class="input-group mb-3">
                    <span class="input-group-text" id="basic-addon1">Genres</span>
                    <div class="tags-input form-control tag-bg-primary" data-splitchars="[;']" id="genres_i" data-id="genres" data-name="genres"></div>
                  </div>
                  <div class="input-group mb-3">
                    <span class="input-group-text">Beschreibung</span>
                    <textarea class="form-control" aria-label="Beschreibung" id="description"></textarea>
                  </div>
                  <input type="thumbnail" class="filepond" id="thumbnail" data-max-files="1" />

                  <button type="button" class="btn btn-soft-success mt-2 w-100" onclick="addBook()">Buch hinzufügen</button>
                  <button type="button" class="btn btn-soft-primary d-none" data-bs-toggle="modal" id="openSelectBook" data-bs-target="#selectBook">
                    Auswahl öffnen
                  </button>
                </div>
              </div>
            </div>
            <div class="col-xl-8">
              <div class="card">
                <div class="card-header">
                  <div class="header-title">
                    <h4 class="card-title">vorhandene Bücher</h4>
                  </div>
                </div>
                <div class="card-body">
                  <?php echo $Table->printTableHead("books-table", array("ISBN", "Titel", "Genres", "Autoren", "Verlag", "Verfügbar", "")); ?>
                  <?php echo $Table->printTableFooter(); ?>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <?php echo $Modal->printModalHead("selectBook", "Bitte wähle das richtige Buch aus", "min-width: 70%"); ?>
  <div class="row" id="selectBookContent"></div>
  <?php echo $Modal->printModalFooter(); ?>
<?php
  echo $LoadResource->insertJS("intern/admin.js");
}
?>

<?php
include('../php/html/footer.php'); ?>
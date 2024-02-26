<?php
$title = "Home";
include('php/server.php');
if (!$Login->isLoggedin()) {
  $actual_link = "https://{$_SERVER['HTTP_HOST']}{$_SERVER['REQUEST_URI']}";
  echo "<meta http-equiv='refresh' content='0; URL=/login/index.php?ref=" . $actual_link . "'>";
  die;
}
include('php/html/menu.php'); ?>
<div class="row row-cols-1">
<div class="col-lg-3 col-md-6">
         <div class="card">
            <div class="card-body">
               <div class="d-flex justify-content-between align-items-center">
                  <div class="bg-info text-white rounded p-3">
                     <svg class="icon-20" xmlns="http://www.w3.org/2000/svg" width="20px" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                     </svg>
                  </div>
                  <div class="text-end">
                     Customers
                        <h2 class="counter" style="visibility: visible;">75</h2>
                  </div>
               </div>
            </div>
         </div>
      </div>
        </div
  <?php
  echo $LoadResource->insertJS("intern/home.js");

  ?>

<?php
include('php/html/footer.php'); ?>
<?php
$title = "Home";
include('php/server.php');
if (!$Login->isLoggedin()) {
   $actual_link = "https://{$_SERVER['HTTP_HOST']}{$_SERVER['REQUEST_URI']}";
   echo "<meta http-equiv='refresh' content='0; URL=/login/index.php?ref=" . $actual_link . "'>";
   die;
}
include('php/html/menu.php'); ?>

<!-- nun beginnt die Startseite ohne Login -->

<div class="row row-cols-4">
   <div class="col-lg-3 col-md-6">
      <div class="card">
         <div class="card-body">
            <div class="d-flex justify-content-between align-items-center">
               <div class="bg-info text-white rounded p-3">
                  <svg class="icon-32" width="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                     <path fill-rule="evenodd" clip-rule="evenodd"
                        d="M8.87774 6.37856C8.87774 8.24523 7.33886 9.75821 5.43887 9.75821C3.53999 9.75821 2 8.24523 2 6.37856C2 4.51298 3.53999 3 5.43887 3C7.33886 3 8.87774 4.51298 8.87774 6.37856ZM20.4933 4.89833C21.3244 4.89833 22 5.56203 22 6.37856C22 7.19618 21.3244 7.85989 20.4933 7.85989H13.9178C13.0856 7.85989 12.4101 7.19618 12.4101 6.37856C12.4101 5.56203 13.0856 4.89833 13.9178 4.89833H20.4933ZM3.50777 15.958H10.0833C10.9155 15.958 11.5911 16.6217 11.5911 17.4393C11.5911 18.2558 10.9155 18.9206 10.0833 18.9206H3.50777C2.67555 18.9206 2 18.2558 2 17.4393C2 16.6217 2.67555 15.958 3.50777 15.958ZM18.5611 20.7778C20.4611 20.7778 22 19.2648 22 17.3992C22 15.5325 20.4611 14.0196 18.5611 14.0196C16.6623 14.0196 15.1223 15.5325 15.1223 17.3992C15.1223 19.2648 16.6623 20.7778 18.5611 20.7778Z"
                        fill="currentColor"></path>
                  </svg>
               </div>
               <div class="text-end">
                 <h6> Bücher </h6>
                  <h3 class="counter" style="visibility: visible;">x</h3>
               </div>
            </div>
         </div>
      </div>
   </div>
   <div class="col-lg-3 col-md-6">
      <div class="card">
         <div class="card-body">
            <div class="d-flex justify-content-between align-items-center">
               <div class="bg-warning text-white rounded p-3">
                  <svg class="icon-32" width="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                     <path fill-rule="evenodd" clip-rule="evenodd"
                        d="M7.33049 2.00049H16.6695C20.0705 2.00049 21.9905 3.92949 22.0005 7.33049V16.6705C22.0005 20.0705 20.0705 22.0005 16.6695 22.0005H7.33049C3.92949 22.0005 2.00049 20.0705 2.00049 16.6705V7.33049C2.00049 3.92949 3.92949 2.00049 7.33049 2.00049ZM12.0495 17.8605C12.4805 17.8605 12.8395 17.5405 12.8795 17.1105V6.92049C12.9195 6.61049 12.7705 6.29949 12.5005 6.13049C12.2195 5.96049 11.8795 5.96049 11.6105 6.13049C11.3395 6.29949 11.1905 6.61049 11.2195 6.92049V17.1105C11.2705 17.5405 11.6295 17.8605 12.0495 17.8605ZM16.6505 17.8605C17.0705 17.8605 17.4295 17.5405 17.4805 17.1105V13.8305C17.5095 13.5095 17.3605 13.2105 17.0895 13.0405C16.8205 12.8705 16.4805 12.8705 16.2005 13.0405C15.9295 13.2105 15.7805 13.5095 15.8205 13.8305V17.1105C15.8605 17.5405 16.2195 17.8605 16.6505 17.8605ZM8.21949 17.1105C8.17949 17.5405 7.82049 17.8605 7.38949 17.8605C6.95949 17.8605 6.59949 17.5405 6.56049 17.1105V10.2005C6.53049 9.88949 6.67949 9.58049 6.95049 9.41049C7.21949 9.24049 7.56049 9.24049 7.83049 9.41049C8.09949 9.58049 8.25049 9.88949 8.21949 10.2005V17.1105Z"
                        fill="currentColor"></path>
                  </svg>
               </div>
               <div class="text-end">
                 <h6> Insgesamt ausgeliehen </h6>
                  <h3 class="counter" style="visibility: visible;">x</h3>
               </div>
            </div>
         </div>
      </div>
   </div>
   <div class="col-lg-3 col-md-6">
      <div class="card">
         <div class="card-body">
            <div class="d-flex justify-content-between align-items-center">
               <div class="bg-secondary text-white rounded p-3">
                  <svg class="icon-32" width="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
                     style="currentColor">
                     <path fill-rule="evenodd" clip-rule="evenodd"
                        d="M12.3264 2.20966C12.4861 2.06632 12.6973 1.99119 12.9135 2.00082C17.4843 2.13765 21.3044 5.4558 21.9967 9.89063C22.0011 9.91711 22.0011 9.94411 21.9967 9.97059C22.0116 10.1804 21.9407 10.3874 21.7996 10.5458C21.6586 10.7043 21.459 10.801 21.2451 10.8147L13.5656 11.3211C13.3116 11.3436 13.0597 11.26 12.8718 11.0909C12.6839 10.9218 12.5774 10.6828 12.5785 10.4326L12.0623 2.88932V2.76493C12.0717 2.55278 12.1667 2.353 12.3264 2.20966ZM11.7997 13.2936L18.4558 12.8671L18.5011 12.8848C18.7869 12.8895 19.0591 13.0054 19.2579 13.207C19.4566 13.4087 19.5655 13.6795 19.5606 13.9599C19.2984 17.782 16.4962 20.9755 12.6828 21.7982C8.86938 22.621 4.96017 20.8754 3.08778 17.5139C2.53722 16.5457 2.1893 15.4794 2.06445 14.3775C2.01603 14.051 1.99483 13.7212 2.00106 13.3913C2.01368 9.32706 4.90728 5.81907 8.95607 4.9595C9.4462 4.86776 9.93762 5.11248 10.1515 5.55479C10.2047 5.63505 10.2473 5.72164 10.2782 5.81245C10.3541 6.98405 10.4329 8.14455 10.5113 9.30015C10.5732 10.2128 10.6349 11.1223 10.6948 12.0319C10.6917 12.2462 10.7254 12.4594 10.7944 12.6627C10.9569 13.0627 11.3614 13.3165 11.7997 13.2936Z"
                        fill="currentColor"></path>
                  </svg>
               </div>
               <div class="text-end">
                  <h6> Seit Beginn ausgeliehen </h6>
                  <h3 class="counter" style="visibility: visible;">x</h3>
               </div>
            </div>
         </div>
      </div>
   </div>
   <div class="col-lg-3 col-md-6">
      <div class="card">
         <div class="card-body">
            <div class="d-flex justify-content-between align-items-center">
               <div class="bg-success text-white rounded p-3">
                  <svg class="icon-32" width="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
                     style="currentColor">
                     <path fill-rule="evenodd" clip-rule="evenodd"
                        d="M14.2124 7.76241C14.2124 10.4062 12.0489 12.5248 9.34933 12.5248C6.6507 12.5248 4.48631 10.4062 4.48631 7.76241C4.48631 5.11865 6.6507 3 9.34933 3C12.0489 3 14.2124 5.11865 14.2124 7.76241ZM2 17.9174C2 15.47 5.38553 14.8577 9.34933 14.8577C13.3347 14.8577 16.6987 15.4911 16.6987 17.9404C16.6987 20.3877 13.3131 21 9.34933 21C5.364 21 2 20.3666 2 17.9174ZM16.1734 7.84875C16.1734 9.19506 15.7605 10.4513 15.0364 11.4948C14.9611 11.6021 15.0276 11.7468 15.1587 11.7698C15.3407 11.7995 15.5276 11.8177 15.7184 11.8216C17.6167 11.8704 19.3202 10.6736 19.7908 8.87118C20.4885 6.19676 18.4415 3.79543 15.8339 3.79543C15.5511 3.79543 15.2801 3.82418 15.0159 3.87688C14.9797 3.88454 14.9405 3.90179 14.921 3.93246C14.8955 3.97174 14.9141 4.02253 14.9396 4.05607C15.7233 5.13216 16.1734 6.44206 16.1734 7.84875ZM19.3173 13.7023C20.5932 13.9466 21.4317 14.444 21.7791 15.1694C22.0736 15.7635 22.0736 16.4534 21.7791 17.0475C21.2478 18.1705 19.5335 18.5318 18.8672 18.6247C18.7292 18.6439 18.6186 18.5289 18.6333 18.3928C18.9738 15.2805 16.2664 13.8048 15.5658 13.4656C15.5364 13.4493 15.5296 13.4263 15.5325 13.411C15.5345 13.4014 15.5472 13.3861 15.5697 13.3832C17.0854 13.3545 18.7155 13.5586 19.3173 13.7023Z"
                        fill="currentColor"></path>
                  </svg>
               </div>
               <div class="text-end">
                  <h6> Mitgliederzahl </h6>
                  <h3 class="counter" style="visibility: visible;">x</h3>
               </div>
            </div>
         </div>
      </div>
   </div>
</div>

<div class="row row-cols-2">
   <div class="col" style="flex: 70%;">
      <div class="card">
         <div class="card-body p-6">
            <h3>Newsletter</h3>
            <div class="text-center">
               <h6 class="counter mb-2" style="visibility: visible; text-align: left"> <b> Datum: </b> 01.03.2023
               </h6>
               <hr>
               <p style="font-size: 1.15em; text-align: left">
                  Sehr geehrte Schülerschaft, <br>
                  am heutigen Tag erhielten wir neue Bücher

               </p>
            </div>
         </div>
      </div>
   </div>
   <div class="col" style="flex: 30%;">
      <div class="card">
         <div class="card-body p-6">
            <h3>Öffnungszeiten & Kontakt </h3>
            <hr>
            <div class="text-center">
               <h6 class="counter mb-2" style="visibility: visible; text-align: left"> Montags - Freitags: 09.30 - 14.30 </h6>
               <hr>
               <h6 class="counter mb-2" style="visibility: visible; text-align: left"> Verantwortliche: FrauSchmidt </h6>
               <hr>
               <h6 class="counter mb-2" style="visibility: visible; text-align: left"> Kontakt: Email </h6>
            </div>
         </div>
      </div>
   </div>
</div>

<!-- nun kommt die Startseite bei Login -->

<div class="row row-cols-4">
   <div class="col-lg-6 col-md-6">
      <div class="card" style="flex: 25%;">
         <div class="card-body">
            <div class="d-flex justify-content-between align-items-center">
               <div class="bg-info text-white rounded p-3">
                  <svg class="icon-32" width="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                     <path fill-rule="evenodd" clip-rule="evenodd"
                        d="M16.4184 6.47H16.6232C19.3152 6.47 21.5 8.72 21.5 11.48V17C21.5 19.76 19.3152 22 16.6232 22H7.3768C4.6848 22 2.5 19.76 2.5 17V11.48C2.5 8.72 4.6848 6.47 7.3768 6.47H7.58162C7.60113 5.27 8.05955 4.15 8.8886 3.31C9.72741 2.46 10.8003 2.03 12.0098 2C14.4286 2 16.3891 4 16.4184 6.47ZM9.91273 4.38C9.36653 4.94 9.06417 5.68 9.04466 6.47H14.9553C14.9261 4.83 13.6191 3.5 12.0098 3.5C11.2587 3.5 10.4784 3.81 9.91273 4.38ZM15.7064 10.32C16.116 10.32 16.4379 9.98 16.4379 9.57V8.41C16.4379 8 16.116 7.66 15.7064 7.66C15.3065 7.66 14.9748 8 14.9748 8.41V9.57C14.9748 9.98 15.3065 10.32 15.7064 10.32ZM8.93737 9.57C8.93737 9.98 8.6155 10.32 8.20585 10.32C7.80595 10.32 7.47433 9.98 7.47433 9.57V8.41C7.47433 8 7.80595 7.66 8.20585 7.66C8.6155 7.66 8.93737 8 8.93737 8.41V9.57Z"
                        fill="currentColor"></path>
                  </svg>
               </div>
               <div class="text-end">
                  <h6> ausgeliehene Bücher </h6>
                  <h3 class="counter" style="visibility: visible;">x</h3>
               </div>
            </div>
         </div>
      </div>
   </div>
   <div class="col-lg-6 col-md-6">
      <div class="card" style="flex: 25%;">
         <div class="card-body">
            <div class="d-flex justify-content-between align-items-center">
               <div class="bg-warning text-white rounded p-3">
                  <svg class="icon-32" width="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
                     style="currentColor">
                     <path fill-rule="evenodd" clip-rule="evenodd"
                        d="M8.9 2H15.07C17.78 2 19.97 3.07 20 5.79V20.97C20 21.14 19.96 21.31 19.88 21.46C19.75 21.7 19.53 21.88 19.26 21.96C19 22.04 18.71 22 18.47 21.86L11.99 18.62L5.5 21.86C5.351 21.939 5.18 21.99 5.01 21.99C4.45 21.99 4 21.53 4 20.97V5.79C4 3.07 6.2 2 8.9 2ZM8.22 9.62H15.75C16.18 9.62 16.53 9.269 16.53 8.83C16.53 8.39 16.18 8.04 15.75 8.04H8.22C7.79 8.04 7.44 8.39 7.44 8.83C7.44 9.269 7.79 9.62 8.22 9.62Z"
                        fill="currentColor"></path>
                  </svg>
               </div>
               <div class="text-end">
                 <h6> Merklistenanzahl </h6>
                  <h3 class="counter" style="visibility: visible;">x</h3>
               </div>
            </div>
         </div>
      </div>
   </div>
   <!--
      <div class="col-lg-4 col-md-4">
         <div class="card"  style="flex: 50%;">
            <div class="card-body">
               <div class="d-flex justify-content-between align-items-center">
                  <div class="bg-info text-white rounded p-3">
                  <svg class="icon-32" width="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">                            <path fill-rule="evenodd" clip-rule="evenodd" d="M12.3264 2.20966C12.4861 2.06632 12.6973 1.99119 12.9135 2.00082C17.4843 2.13765 21.3044 5.4558 21.9967 9.89063C22.0011 9.91711 22.0011 9.94411 21.9967 9.97059C22.0116 10.1804 21.9407 10.3874 21.7996 10.5458C21.6586 10.7043 21.459 10.801 21.2451 10.8147L13.5656 11.3211C13.3116 11.3436 13.0597 11.26 12.8718 11.0909C12.6839 10.9218 12.5774 10.6828 12.5785 10.4326L12.0623 2.88932V2.76493C12.0717 2.55278 12.1667 2.353 12.3264 2.20966ZM11.7997 13.2936L18.4558 12.8671L18.5011 12.8848C18.7869 12.8895 19.0591 13.0054 19.2579 13.207C19.4566 13.4087 19.5655 13.6795 19.5606 13.9599C19.2984 17.782 16.4962 20.9755 12.6828 21.7982C8.86938 22.621 4.96017 20.8754 3.08778 17.5139C2.53722 16.5457 2.1893 15.4794 2.06445 14.3775C2.01603 14.051 1.99483 13.7212 2.00106 13.3913C2.01368 9.32706 4.90728 5.81907 8.95607 4.9595C9.4462 4.86776 9.93762 5.11248 10.1515 5.55479C10.2047 5.63505 10.2473 5.72164 10.2782 5.81245C10.3541 6.98405 10.4329 8.14455 10.5113 9.30015C10.5732 10.2128 10.6349 11.1223 10.6948 12.0319C10.6917 12.2462 10.7254 12.4594 10.7944 12.6627C10.9569 13.0627 11.3614 13.3165 11.7997 13.2936Z" fill="currentColor"></path>                            </svg>                        
                  </div>
                  <div class="text-end">
                        Mahnungen
                   <h2 class="counter" style="visibility: visible;">x</h2>
                  </div>
               </div>
            </div>
         </div>
      </div> -->
</div>
<!--
<div class="row row-cols-2">
   <div class="col" style="flex: 70%;">
      <div class="col-sm-12">
         <div class="card">
            <div class="card-header d-flex justify-content-between">
            <div class="bg-info text-white rounded p-3">
                  <svg class="icon-32" width="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                     <path fill-rule="evenodd" clip-rule="evenodd"
                        d="M8.87774 6.37856C8.87774 8.24523 7.33886 9.75821 5.43887 9.75821C3.53999 9.75821 2 8.24523 2 6.37856C2 4.51298 3.53999 3 5.43887 3C7.33886 3 8.87774 4.51298 8.87774 6.37856ZM20.4933 4.89833C21.3244 4.89833 22 5.56203 22 6.37856C22 7.19618 21.3244 7.85989 20.4933 7.85989H13.9178C13.0856 7.85989 12.4101 7.19618 12.4101 6.37856C12.4101 5.56203 13.0856 4.89833 13.9178 4.89833H20.4933ZM3.50777 15.958H10.0833C10.9155 15.958 11.5911 16.6217 11.5911 17.4393C11.5911 18.2558 10.9155 18.9206 10.0833 18.9206H3.50777C2.67555 18.9206 2 18.2558 2 17.4393C2 16.6217 2.67555 15.958 3.50777 15.958ZM18.5611 20.7778C20.4611 20.7778 22 19.2648 22 17.3992C22 15.5325 20.4611 14.0196 18.5611 14.0196C16.6623 14.0196 15.1223 15.5325 15.1223 17.3992C15.1223 19.2648 16.6623 20.7778 18.5611 20.7778Z"
                        fill="currentColor"></path>
                  </svg>
               </div>
               <div class="header-title">
                  <h4 class="card-title">Informationen zur Ausleihe</h4>
               </div>
            </div>
            <div class="card-body p-0">
               <div class="table-responsive mt-4">
                  <table id="basic-table" class="table table-striped mb-0" role="grid">
                     <tbody>
                        <tr>
                           <th>
                              <h5><b>Bücher<b></h5>
                           </th>
                           <th>
                              <h5><b>Abgabe<b></h5>
                           </th>
                           <th>
                              <h5><b>Mahnungen<b></h5>
                           </th>
                        </tr>
                        <tr>
                        <tr>
                           <td>
                              <div class="d-flex align-items-center">
                                 <h6>Soft UI XD Version</h6>
                              </div>
                           </td>
                           <td style="color:#f16a1b">02.03.2024</td>
                           <td>
                              <div class="text-info">0.00€</div>
                           </td>
                        </tr>
                        <tr>
                           <td>
                              <div class="d-flex align-items-center">
                                 <h6>Soft UI XD Version</h6>
                              </div>
                           </td>
                           <td style="color:#f16a1b">02.03.2024</td>
                           <td>
                              <div class="text-info">0.00€</div>
                           </td>
                        </tr>
                        <tr>
                           <td>
                              <div class="d-flex align-items-center">
                                 <h6>Soft UI XD Version</h6>
                              </div>
                           </td>
                           <td style="color:#f16a1b">02.03.2024</td>
                           <td>
                              <div class="text-info">0.00€</div>
                           </td>
                        </tr>
                     </tbody>
                  </table>
               </div>
            </div>
         </div>
      </div>
   </div> -->
   <!--<div class="row row-cols-2"> -->
   <div class="row">
 <!-- <div class="col" style="flex: 70%;"> -->
   <!-- <div class="col-sm-12"> -->
   <!--
    <div class="col-md-8">
      <div class="card">
        <div class="card-header d-flex align-items-center">
          <div class="bg-info text-white rounded p-3">
            <svg class="icon-32" width="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd"
                d="M8.87774 6.37856C8.87774 8.24523 7.33886 9.75821 5.43887 9.75821C3.53999 9.75821 2 8.24523 2 6.37856C2 4.51298 3.53999 3 5.43887 3C7.33886 3 8.87774 4.51298 8.87774 6.37856ZM20.4933 4.89833C21.3244 4.89833 22 5.56203 22 6.37856C22 7.19618 21.3244 7.85989 20.4933 7.85989H13.9178C13.0856 7.85989 12.4101 7.19618 12.4101 6.37856C12.4101 5.56203 13.0856 4.89833 13.9178 4.89833H20.4933ZM3.50777 15.958H10.0833C10.9155 15.958 11.5911 16.6217 11.5911 17.4393C11.5911 18.2558 10.9155 18.9206 10.0833 18.9206H3.50777C2.67555 18.9206 2 18.2558 2 17.4393C2 16.6217 2.67555 15.958 3.50777 15.958ZM18.5611 20.7778C20.4611 20.7778 22 19.2648 22 17.3992C22 15.5325 20.4611 14.0196 18.5611 14.0196C16.6623 14.0196 15.1223 15.5325 15.1223 17.3992C15.1223 19.2648 16.6623 20.7778 18.5611 20.7778Z"
                fill="currentColor"></path>
            </svg>
          </div>
          <div class="header-title ml-3">
            <h4 class="card-title" style = "padding-left: 20px;">Informationen zur Ausleihe</h4>
          </div>
        </div>
        <div class="card-body p-0">
          <div class="table-responsive mt-4">
            <table id="basic-table" class="table table-striped mb-0" role="grid">
              <tbody>
                <tr>
                  <th>
                    <h5><b>Bücher<b></h5>
                  </th>
                  <th>
                    <h5><b>Abgabe<b></h5>
                  </th>
                  <th>
                    <h5><b>Mahnungen<b></h5>
                  </th>
                </tr>
                <tr>
                  <td>
                    <div class="d-flex align-items-center">
                      <h6>Soft UI XD Version</h6>
                    </div>
                  </td>
                  <td style="color:#f16a1b">02.03.2024</td>
                  <td>
                    <div class="text-info">0.00€</div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div class="d-flex align-items-center">
                      <h6>Soft UI XD Version</h6>
                    </div>
                  </td>
                  <td style="color:#f16a1b">02.03.2024</td>
                  <td>
                    <div class="text-info">0.00€</div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div class="d-flex align-items-center">
                      <h6>Soft UI XD Version</h6>
                    </div>
                  </td>
                  <td style="color:#f16a1b">02.03.2024</td>
                  <td>
                    <div class="text-info">0.00€</div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</div> -->

<!--<div class="col" style="flex: 30%;"> -->
   <!--
<div class="col-md-4">
  <div class="card">
    <div class="card-body p-6" style="display: flex; align-items: center;">
      <div class="bg-info text-white rounded p-3" style="margin-right: 20px;">
      <svg class="icon-32" width="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                     <path fill-rule="evenodd" clip-rule="evenodd"
                        d="M8.87774 6.37856C8.87774 8.24523 7.33886 9.75821 5.43887 9.75821C3.53999 9.75821 2 8.24523 2 6.37856C2 4.51298 3.53999 3 5.43887 3C7.33886 3 8.87774 4.51298 8.87774 6.37856ZM20.4933 4.89833C21.3244 4.89833 22 5.56203 22 6.37856C22 7.19618 21.3244 7.85989 20.4933 7.85989H13.9178C13.0856 7.85989 12.4101 7.19618 12.4101 6.37856C12.4101 5.56203 13.0856 4.89833 13.9178 4.89833H20.4933ZM3.50777 15.958H10.0833C10.9155 15.958 11.5911 16.6217 11.5911 17.4393C11.5911 18.2558 10.9155 18.9206 10.0833 18.9206H3.50777C2.67555 18.9206 2 18.2558 2 17.4393C2 16.6217 2.67555 15.958 3.50777 15.958ZM18.5611 20.7778C20.4611 20.7778 22 19.2648 22 17.3992C22 15.5325 20.4611 14.0196 18.5611 14.0196C16.6623 14.0196 15.1223 15.5325 15.1223 17.3992C15.1223 19.2648 16.6623 20.7778 18.5611 20.7778Z"
                        fill="currentColor"></path>
                  </svg>
      </div>
      <h3 style="margin-bottom: 0;">Merkliste</h3>
    </div>
    <hr>
    <div class = "text-centre">
      <h5 class="counter mb-2" style="text-align: left; padding-left: 50px;"><b>Harry Potter</b></h5>
      <hr>
      <h5 class="counter mb-2" style="text-align: left; padding-left: 50px;"><b>Corpus Delicti</b></h5>
      <hr>
      <h5 class="counter mb-2" style="text-align: left; padding-left: 50px;"><b>Woyzeck</b></h5>
</div>
  </div>
</div>
</div> -->

   <!--
   <div class="col" style="flex: 30%;">
      <div class="card">
         <div class="card-body p-6">
         <div class="bg-info text-white rounded p-1">
                  <svg class="icon-32" width="10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                     <path fill-rule="evenodd" clip-rule="evenodd"
                        d="M8.87774 6.37856C8.87774 8.24523 7.33886 9.75821 5.43887 9.75821C3.53999 9.75821 2 8.24523 2 6.37856C2 4.51298 3.53999 3 5.43887 3C7.33886 3 8.87774 4.51298 8.87774 6.37856ZM20.4933 4.89833C21.3244 4.89833 22 5.56203 22 6.37856C22 7.19618 21.3244 7.85989 20.4933 7.85989H13.9178C13.0856 7.85989 12.4101 7.19618 12.4101 6.37856C12.4101 5.56203 13.0856 4.89833 13.9178 4.89833H20.4933ZM3.50777 15.958H10.0833C10.9155 15.958 11.5911 16.6217 11.5911 17.4393C11.5911 18.2558 10.9155 18.9206 10.0833 18.9206H3.50777C2.67555 18.9206 2 18.2558 2 17.4393C2 16.6217 2.67555 15.958 3.50777 15.958ZM18.5611 20.7778C20.4611 20.7778 22 19.2648 22 17.3992C22 15.5325 20.4611 14.0196 18.5611 14.0196C16.6623 14.0196 15.1223 15.5325 15.1223 17.3992C15.1223 19.2648 16.6623 20.7778 18.5611 20.7778Z"
                        fill="currentColor"></path>
                  </svg>
               </div>
                  <h3>Merkliste </h3>
            <hr>
            <div class="text-center">
               <h5 class="counter mb-2" style="visibility: visible; text-align: left"> <b> Harry Potter </h5>
               <hr>
               <h5 class="counter mb-2" style="visibility: visible; text-align: left"> <b> Corpus Delicti </h5>
               <hr>
               <h5 class="counter mb-2" style="visibility: visible; text-align: left"> <b> Woyzeck </h5>
            </div>
         </div>
      </div>
   </div> -->
   <div class="row">
  <div class="col-md-8">
    <div class="card">
    <!--<div class="card-header d-flex justify-content-between">
            <div class="bg-info text-white rounded p-3">
                  <svg class="icon-32" width="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                     <path fill-rule="evenodd" clip-rule="evenodd"
                        d="M8.87774 6.37856C8.87774 8.24523 7.33886 9.75821 5.43887 9.75821C3.53999 9.75821 2 8.24523 2 6.37856C2 4.51298 3.53999 3 5.43887 3C7.33886 3 8.87774 4.51298 8.87774 6.37856ZM20.4933 4.89833C21.3244 4.89833 22 5.56203 22 6.37856C22 7.19618 21.3244 7.85989 20.4933 7.85989H13.9178C13.0856 7.85989 12.4101 7.19618 12.4101 6.37856C12.4101 5.56203 13.0856 4.89833 13.9178 4.89833H20.4933ZM3.50777 15.958H10.0833C10.9155 15.958 11.5911 16.6217 11.5911 17.4393C11.5911 18.2558 10.9155 18.9206 10.0833 18.9206H3.50777C2.67555 18.9206 2 18.2558 2 17.4393C2 16.6217 2.67555 15.958 3.50777 15.958ZM18.5611 20.7778C20.4611 20.7778 22 19.2648 22 17.3992C22 15.5325 20.4611 14.0196 18.5611 14.0196C16.6623 14.0196 15.1223 15.5325 15.1223 17.3992C15.1223 19.2648 16.6623 20.7778 18.5611 20.7778Z"
                        fill="currentColor"></path>
                  </svg>
               </div>
               <div class="header-title">
                  <h4 class="card-title" style ="text-align: left">Informationen zur Ausleihe</h4>
               </div>
            </div> -->
            <div class="card-header d-flex justify-content-between align-items-center">
    <div class="bg-info text-white rounded p-3">
        <svg class="icon-32" width="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd"
                d="M8.87774 6.37856C8.87774 8.24523 7.33886 9.75821 5.43887 9.75821C3.53999 9.75821 2 8.24523 2 6.37856C2 4.51298 3.53999 3 5.43887 3C7.33886 3 8.87774 4.51298 8.87774 6.37856ZM20.4933 4.89833C21.3244 4.89833 22 5.56203 22 6.37856C22 7.19618 21.3244 7.85989 20.4933 7.85989H13.9178C13.0856 7.85989 12.4101 7.19618 12.4101 6.37856C12.4101 5.56203 13.0856 4.89833 13.9178 4.89833H20.4933ZM3.50777 15.958H10.0833C10.9155 15.958 11.5911 16.6217 11.5911 17.4393C11.5911 18.2558 10.9155 18.9206 10.0833 18.9206H3.50777C2.67555 18.9206 2 18.2558 2 17.4393C2 16.6217 2.67555 15.958 3.50777 15.958ZM18.5611 20.7778C20.4611 20.7778 22 19.2648 22 17.3992C22 15.5325 20.4611 14.0196 18.5611 14.0196C16.6623 14.0196 15.1223 15.5325 15.1223 17.3992C15.1223 19.2648 16.6623 20.7778 18.5611 20.7778Z"
                fill="currentColor"></path>
        </svg>
    </div>
    <div class="header-title ml-3" style="flex: 1;">
        <h4 class="card-title" style="text-align: left; margin-bottom: 0; padding-left: 50px;">Informationen zur Ausleihe</h4>
    </div>
</div>


      <div class="card-body p-0">
        <div class="table-responsive mt-4">
          <table id="basic-table" class="table table-striped mb-0" role="grid">
            <tbody>
              <tr>
                <th><h5><b>Bücher</b></h5></th>
                <th><h5><b>Abgabe</b></h5></th>
                <th><h5><b>Mahnungen</b></h5></th>
              </tr>
              <tr>
                <td><h6>Soft UI XD Version</h6></td>
                <td style="color:#f16a1b">02.03.2024</td>
                <td><div class="text-info">0.00€</div></td>
              </tr>
              <tr>
                <td><h6>Soft UI XD Version</h6></td>
                <td style="color:#f16a1b">02.03.2024</td>
                <td><div class="text-info">0.00€</div></td>
              </tr>
              <tr>
                <td><h6>Soft UI XD Version</h6></td>
                <td style="color:#f16a1b">02.03.2024</td>
                <td><div class="text-info">0.00€</div></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
  <div class="col-md-4">
  <div class="card">
  <div class="card">
    <div class="card-body p-6" style="display: flex; align-items: center;">
      <div class="bg-info text-white rounded p-3" style="margin-right: 20px;">
      <svg class="icon-32" width="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                     <path fill-rule="evenodd" clip-rule="evenodd"
                        d="M8.87774 6.37856C8.87774 8.24523 7.33886 9.75821 5.43887 9.75821C3.53999 9.75821 2 8.24523 2 6.37856C2 4.51298 3.53999 3 5.43887 3C7.33886 3 8.87774 4.51298 8.87774 6.37856ZM20.4933 4.89833C21.3244 4.89833 22 5.56203 22 6.37856C22 7.19618 21.3244 7.85989 20.4933 7.85989H13.9178C13.0856 7.85989 12.4101 7.19618 12.4101 6.37856C12.4101 5.56203 13.0856 4.89833 13.9178 4.89833H20.4933ZM3.50777 15.958H10.0833C10.9155 15.958 11.5911 16.6217 11.5911 17.4393C11.5911 18.2558 10.9155 18.9206 10.0833 18.9206H3.50777C2.67555 18.9206 2 18.2558 2 17.4393C2 16.6217 2.67555 15.958 3.50777 15.958ZM18.5611 20.7778C20.4611 20.7778 22 19.2648 22 17.3992C22 15.5325 20.4611 14.0196 18.5611 14.0196C16.6623 14.0196 15.1223 15.5325 15.1223 17.3992C15.1223 19.2648 16.6623 20.7778 18.5611 20.7778Z"
                        fill="currentColor"></path>
                  </svg>
      </div>
      <h3 style="margin-bottom: 0;">Merkliste</h3>
    </div>
    <hr>
    <div class = "text-centre">
      <h5 class="counter mb-2" style="text-align: left; padding-left: 30px;"><b>Harry Potter</b></h5>
      <hr>
      <h5 class="counter mb-2" style="text-align: left; padding-left: 30px;"><b>Corpus Delicti</b></h5>
      <hr>
      <h5 class="counter mb-2" style="text-align: left; padding-left: 30px;"><b>Woyzeck</b></h5>
</div>
  </div>
</div>
</div>
</div>


  

<?php
echo $LoadResource->insertJS("intern/home.js");
?>

<?php
include('php/html/footer.php'); ?>
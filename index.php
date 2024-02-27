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
                  <svg class="icon-32" width="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">                            <path fill-rule="evenodd" clip-rule="evenodd" d="M16.4184 6.47H16.6232C19.3152 6.47 21.5 8.72 21.5 11.48V17C21.5 19.76 19.3152 22 16.6232 22H7.3768C4.6848 22 2.5 19.76 2.5 17V11.48C2.5 8.72 4.6848 6.47 7.3768 6.47H7.58162C7.60113 5.27 8.05955 4.15 8.8886 3.31C9.72741 2.46 10.8003 2.03 12.0098 2C14.4286 2 16.3891 4 16.4184 6.47ZM9.91273 4.38C9.36653 4.94 9.06417 5.68 9.04466 6.47H14.9553C14.9261 4.83 13.6191 3.5 12.0098 3.5C11.2587 3.5 10.4784 3.81 9.91273 4.38ZM15.7064 10.32C16.116 10.32 16.4379 9.98 16.4379 9.57V8.41C16.4379 8 16.116 7.66 15.7064 7.66C15.3065 7.66 14.9748 8 14.9748 8.41V9.57C14.9748 9.98 15.3065 10.32 15.7064 10.32ZM8.93737 9.57C8.93737 9.98 8.6155 10.32 8.20585 10.32C7.80595 10.32 7.47433 9.98 7.47433 9.57V8.41C7.47433 8 7.80595 7.66 8.20585 7.66C8.6155 7.66 8.93737 8 8.93737 8.41V9.57Z" fill="currentColor"></path>                            </svg>                                     
                  </div>
                  <div class="text-end">
                     Anzahl Bücher
                        <h2 class="counter" style="visibility: visible;">x</h2>
                  </div>
               </div>
            </div>
         </div>
      </div>
      <div class="col-lg-3 col-md-6">
         <div class="card">
            <div class="card-body">
               <div class="d-flex justify-content-between align-items-center">
                  <div class="bg-info text-white rounded p-3">
                  <svg class="icon-32" width="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">                            <path fill-rule="evenodd" clip-rule="evenodd" d="M7.33049 2.00049H16.6695C20.0705 2.00049 21.9905 3.92949 22.0005 7.33049V16.6705C22.0005 20.0705 20.0705 22.0005 16.6695 22.0005H7.33049C3.92949 22.0005 2.00049 20.0705 2.00049 16.6705V7.33049C2.00049 3.92949 3.92949 2.00049 7.33049 2.00049ZM12.0495 17.8605C12.4805 17.8605 12.8395 17.5405 12.8795 17.1105V6.92049C12.9195 6.61049 12.7705 6.29949 12.5005 6.13049C12.2195 5.96049 11.8795 5.96049 11.6105 6.13049C11.3395 6.29949 11.1905 6.61049 11.2195 6.92049V17.1105C11.2705 17.5405 11.6295 17.8605 12.0495 17.8605ZM16.6505 17.8605C17.0705 17.8605 17.4295 17.5405 17.4805 17.1105V13.8305C17.5095 13.5095 17.3605 13.2105 17.0895 13.0405C16.8205 12.8705 16.4805 12.8705 16.2005 13.0405C15.9295 13.2105 15.7805 13.5095 15.8205 13.8305V17.1105C15.8605 17.5405 16.2195 17.8605 16.6505 17.8605ZM8.21949 17.1105C8.17949 17.5405 7.82049 17.8605 7.38949 17.8605C6.95949 17.8605 6.59949 17.5405 6.56049 17.1105V10.2005C6.53049 9.88949 6.67949 9.58049 6.95049 9.41049C7.21949 9.24049 7.56049 9.24049 7.83049 9.41049C8.09949 9.58049 8.25049 9.88949 8.21949 10.2005V17.1105Z" fill="currentColor"></path>                            </svg>                        
                  </div>
                  <div class="text-end">
                        Insgesamt ausgeliehen
                        <h2 class="counter" style="visibility: visible;">x</h2>
                  </div>
               </div>
            </div>
         </div>
      </div>
      <div class="col-lg-3 col-md-6">
         <div class="card">
            <div class="card-body">
               <div class="d-flex justify-content-between align-items-center">
                  <div class="bg-info text-white rounded p-3">
                  <svg class="icon-32" width="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">                            <path fill-rule="evenodd" clip-rule="evenodd" d="M12.3264 2.20966C12.4861 2.06632 12.6973 1.99119 12.9135 2.00082C17.4843 2.13765 21.3044 5.4558 21.9967 9.89063C22.0011 9.91711 22.0011 9.94411 21.9967 9.97059C22.0116 10.1804 21.9407 10.3874 21.7996 10.5458C21.6586 10.7043 21.459 10.801 21.2451 10.8147L13.5656 11.3211C13.3116 11.3436 13.0597 11.26 12.8718 11.0909C12.6839 10.9218 12.5774 10.6828 12.5785 10.4326L12.0623 2.88932V2.76493C12.0717 2.55278 12.1667 2.353 12.3264 2.20966ZM11.7997 13.2936L18.4558 12.8671L18.5011 12.8848C18.7869 12.8895 19.0591 13.0054 19.2579 13.207C19.4566 13.4087 19.5655 13.6795 19.5606 13.9599C19.2984 17.782 16.4962 20.9755 12.6828 21.7982C8.86938 22.621 4.96017 20.8754 3.08778 17.5139C2.53722 16.5457 2.1893 15.4794 2.06445 14.3775C2.01603 14.051 1.99483 13.7212 2.00106 13.3913C2.01368 9.32706 4.90728 5.81907 8.95607 4.9595C9.4462 4.86776 9.93762 5.11248 10.1515 5.55479C10.2047 5.63505 10.2473 5.72164 10.2782 5.81245C10.3541 6.98405 10.4329 8.14455 10.5113 9.30015C10.5732 10.2128 10.6349 11.1223 10.6948 12.0319C10.6917 12.2462 10.7254 12.4594 10.7944 12.6627C10.9569 13.0627 11.3614 13.3165 11.7997 13.2936Z" fill="currentColor"></path>                            </svg>                        
                  </div>
                  <div class="text-end">
                        Seit beginn ausgeliehen 
                   <h2 class="counter" style="visibility: visible;">x</h2>
                  </div>
               </div>
            </div>
         </div>
      </div>
      <div class="col-lg-3 col-md-6">
         <div class="card">
            <div class="card-body">
               <div class="d-flex justify-content-between align-items-center">
                  <div class="bg-info text-white rounded p-3">
                  <div class="col-lg-3 col-md-6">
         <div class="card">
            <div class="card-body">
               <div class="d-flex justify-content-between align-items-center">
                  <div class="bg-info text-white rounded p-3">
                  <svg class="icon-32" width="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">                            <path fill-rule="evenodd" clip-rule="evenodd" d="M7.33049 2.00049H16.6695C20.0705 2.00049 21.9905 3.92949 22.0005 7.33049V16.6705C22.0005 20.0705 20.0705 22.0005 16.6695 22.0005H7.33049C3.92949 22.0005 2.00049 20.0705 2.00049 16.6705V7.33049C2.00049 3.92949 3.92949 2.00049 7.33049 2.00049ZM12.0495 17.8605C12.4805 17.8605 12.8395 17.5405 12.8795 17.1105V6.92049C12.9195 6.61049 12.7705 6.29949 12.5005 6.13049C12.2195 5.96049 11.8795 5.96049 11.6105 6.13049C11.3395 6.29949 11.1905 6.61049 11.2195 6.92049V17.1105C11.2705 17.5405 11.6295 17.8605 12.0495 17.8605ZM16.6505 17.8605C17.0705 17.8605 17.4295 17.5405 17.4805 17.1105V13.8305C17.5095 13.5095 17.3605 13.2105 17.0895 13.0405C16.8205 12.8705 16.4805 12.8705 16.2005 13.0405C15.9295 13.2105 15.7805 13.5095 15.8205 13.8305V17.1105C15.8605 17.5405 16.2195 17.8605 16.6505 17.8605ZM8.21949 17.1105C8.17949 17.5405 7.82049 17.8605 7.38949 17.8605C6.95949 17.8605 6.59949 17.5405 6.56049 17.1105V10.2005C6.53049 9.88949 6.67949 9.58049 6.95049 9.41049C7.21949 9.24049 7.56049 9.24049 7.83049 9.41049C8.09949 9.58049 8.25049 9.88949 8.21949 10.2005V17.1105Z" fill="currentColor"></path>                            </svg>                        
                  </div>
                  <div class="text-end">
                        Insgesamt ausgeliehen
                        <h2 class="counter" style="visibility: visible;">x</h2>
                  </div>
               </div>
            </div>
         </div>
      </div>
                  </div>
                  <div class="text-end">
                        Mitgliederzahl
                        <h2 class="counter" style="visibility: visible;">x</h2>
                  </div>
               </div>
            </div>
         </div>
      </div>

      <div class="card">
                    <div class="card-body">
                        <div class="user-post-data">
                            <div class="d-flex flex-wrap">
                                <div class="media-support-user-img me-3">
                                    <img class="rounded-circle p-1 bg-soft-danger img-fluid avatar-60" src="../../assets/images/avatars/02.png" alt="">
                                </div>
                                <div class="media-support-info mt-2">
                                    <h5 class="mb-0 d-inline-block">Ira Membrit</h5>
                                    <p class="mb-0 text-primary">6 hour ago</p>
                                </div>
                            </div>
                        </div>
                        <div class="mt-3">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nulla dolor, ornare at commodo non, feugiat non nisi.</p>
                        </div>
                        <div class="comment-area mt-3">
                            <div class="d-flex justify-content-between align-items-center">
                                <div class="like-block position-relative d-flex align-items-center">
                                    <div class="d-flex align-items-center">                                    
                                        <p class="mb-0">
                                            <svg class="icon-18" width="18" viewBox="0 0 24 24">
                                                <path fill="currentColor" d="M5,9V21H1V9H5M9,21A2,2 0 0,1 7,19V9C7,8.45 7.22,7.95 7.59,7.59L14.17,1L15.23,2.06C15.5,2.33 15.67,2.7 15.67,3.11L15.64,3.43L14.69,8H21C22.11,8 23,8.9 23,10V12C23,12.26 22.95,12.5 22.86,12.73L19.84,19.78C19.54,20.5 18.83,21 18,21H9M9,19H18.03L21,12V10H12.21L13.34,4.68L9,9.03V19Z"></path>
                                            </svg> 
                                            140 Likes</p>
                                        <p class="ms-3 mb-0">comments</p>
                                    </div>
                                </div>
                                <div class="share-block d-flex align-items-center feather-icon me-3">
                                    <a href="javascript:void();" data-bs-toggle="offcanvas" data-bs-target="#share-btn" aria-controls="share-btn">
                                    <span class="ms-1">
                                        <svg class="icon-18" width="18" viewBox="0 0 24 24">
                                            <path fill="currentColor" d="M18 16.08C17.24 16.08 16.56 16.38 16.04 16.85L8.91 12.7C8.96 12.47 9 12.24 9 12S8.96 11.53 8.91 11.3L15.96 7.19C16.5 7.69 17.21 8 18 8C19.66 8 21 6.66 21 5S19.66 2 18 2 15 3.34 15 5C15 5.24 15.04 5.47 15.09 5.7L8.04 9.81C7.5 9.31 6.79 9 6 9C4.34 9 3 10.34 3 12S4.34 15 6 15C6.79 15 7.5 14.69 8.04 14.19L15.16 18.34C15.11 18.55 15.08 18.77 15.08 19C15.08 20.61 16.39 21.91 18 21.91S20.92 20.61 20.92 19C20.92 17.39 19.61 16.08 18 16.08M18 4C18.55 4 19 4.45 19 5S18.55 6 18 6 17 5.55 17 5 17.45 4 18 4M6 13C5.45 13 5 12.55 5 12S5.45 11 6 11 7 11.45 7 12 6.55 13 6 13M18 20C17.45 20 17 19.55 17 19S17.45 18 18 18 19 18.45 19 19 18.55 20 18 20Z"></path>
                                        </svg>
                                        99 Share</span></a>
                                </div>
                            </div>
                            <hr>
                            <ul class="post-comments p-0 list-inline">
                                <li class="mb-3">
                                    <div class="d-flex flex-wrap">
                                        <div class="user-img">
                                            <img src="../../assets/images/avatars/03.png" alt="userimg" class="p-1 bg-soft-primary avatar-60 rounded-circle img-fluid">
                                        </div>
                                        <div class="comment-data-block ms-3">
                                            <h6 class="mb-2">Monty Carlo</h6>
                                            <p class="mb-0">Lorem ipsum dolor sit amet</p>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                            <form class="form" action="#">
                                <div class="input-group mb-3">
                                    <input type="text" class="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="basic-addon2">
                                    <button type="button" class="btn input-group-text btn-primary" id="basic-addon2">
                                        <svg class="icon-24" width="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M21.4274 2.5783C20.9274 2.0673 20.1874 1.8783 19.4974 2.0783L3.40742 6.7273C2.67942 6.9293 2.16342 7.5063 2.02442 8.2383C1.88242 8.9843 2.37842 9.9323 3.02642 10.3283L8.05742 13.4003C8.57342 13.7163 9.23942 13.6373 9.66642 13.2093L15.4274 7.4483C15.7174 7.1473 16.1974 7.1473 16.4874 7.4483C16.7774 7.7373 16.7774 8.2083 16.4874 8.5083L10.7164 14.2693C10.2884 14.6973 10.2084 15.3613 10.5234 15.8783L13.5974 20.9283C13.9574 21.5273 14.5774 21.8683 15.2574 21.8683C15.3374 21.8683 15.4274 21.8683 15.5074 21.8573C16.2874 21.7583 16.9074 21.2273 17.1374 20.4773L21.9074 4.5083C22.1174 3.8283 21.9274 3.0883 21.4274 2.5783Z" fill="currentColor"></path>
                                            <path opacity="0.4" fill-rule="evenodd" clip-rule="evenodd" d="M3.01049 16.8079C2.81849 16.8079 2.62649 16.7349 2.48049 16.5879C2.18749 16.2949 2.18749 15.8209 2.48049 15.5279L3.84549 14.1619C4.13849 13.8699 4.61349 13.8699 4.90649 14.1619C5.19849 14.4549 5.19849 14.9299 4.90649 15.2229L3.54049 16.5879C3.39449 16.7349 3.20249 16.8079 3.01049 16.8079ZM6.77169 18.0003C6.57969 18.0003 6.38769 17.9273 6.24169 17.7803C5.94869 17.4873 5.94869 17.0133 6.24169 16.7203L7.60669 15.3543C7.89969 15.0623 8.37469 15.0623 8.66769 15.3543C8.95969 15.6473 8.95969 16.1223 8.66769 16.4153L7.30169 17.7803C7.15569 17.9273 6.96369 18.0003 6.77169 18.0003ZM7.02539 21.5683C7.17139 21.7153 7.36339 21.7883 7.55539 21.7883C7.74739 21.7883 7.93939 21.7153 8.08539 21.5683L9.45139 20.2033C9.74339 19.9103 9.74339 19.4353 9.45139 19.1423C9.15839 18.8503 8.68339 18.8503 8.39039 19.1423L7.02539 20.5083C6.73239 20.8013 6.73239 21.2753 7.02539 21.5683Z" fill="currentColor"></path>
                                        </svg>
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>                    
</div> 
  <?php
  echo $LoadResource->insertJS("intern/home.js");

  ?>

<?php
include('php/html/footer.php'); ?>
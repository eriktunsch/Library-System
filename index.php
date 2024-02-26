<?php
$title = "Home";
include('php/server.php');
if (!$Login->isLoggedin()) {
  $actual_link = "https://{$_SERVER['HTTP_HOST']}{$_SERVER['REQUEST_URI']}";
  echo "<meta http-equiv='refresh' content='0; URL=/login/index.php?ref=" . $actual_link . "'>";
  die;
}
include('php/html/menu.php'); ?>
<div class="row">
            <div class="col-md-12">
                <div class="card" data-aos="fade-up" data-aos-delay="800">
                    <div class="flex-wrap card-header d-flex justify-content-between align-items-center">
                        <div class="header-title">
                            <h4 class="card-title">$855.8K</h4>
                            <p class="mb-0">Gross Sales</p>
                        </div>
                        <div class="d-flex align-items-center align-self-center">
                            <div class="d-flex align-items-center text-primary">
                                <svg class="icon-12" xmlns="http://www.w3.org/2000/svg" width="12" viewBox="0 0 24 24" fill="currentColor">
                           <g>
                              <circle cx="12" cy="12" r="8" fill="currentColor"></circle>
                           </g>
                        </svg>
                                <div class="ms-2">
                                    <span class="text-gray">Sales</span>
                                </div>
                            </div>
                            <div class="d-flex align-items-center ms-3 text-info">
                                <svg class="icon-12" xmlns="http://www.w3.org/2000/svg" width="12" viewBox="0 0 24 24" fill="currentColor">
                           <g>
                              <circle cx="12" cy="12" r="8" fill="currentColor"></circle>
                           </g>
                        </svg>
                                <div class="ms-2">
                                    <span class="text-gray">Cost</span>
                                </div>
                            </div>
                        </div>
                        <div class="dropdown">
                            <a href="#" class="text-gray dropdown-toggle" id="dropdownMenuButton22" data-bs-toggle="dropdown" aria-expanded="false">
                     This Week
                     </a>
                            <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="dropdownMenuButton22">
                                <li><a class="dropdown-item" href="#">This Week</a></li>
                                <li><a class="dropdown-item" href="#">This Month</a></li>
                                <li><a class="dropdown-item" href="#">This Year</a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="card-body">
                        <div id="d-main" class="d-main"></div>
                    </div>
                </div>
            </div>
            <div class="col-md-12 col-xl-6">
                <div class="card" data-aos="fade-up" data-aos-delay="900">
                    <div class="flex-wrap card-header d-flex justify-content-between">
                        <div class="header-title">
                            <h4 class="card-title">Earnings</h4>
                        </div>
                        <div class="dropdown">
                            <a href="#" class="text-gray dropdown-toggle" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                        This Week
                     </a>
                            <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="dropdownMenuButton1">
                                <li><a class="dropdown-item" href="#">This Week</a></li>
                                <li><a class="dropdown-item" href="#">This Month</a></li>
                                <li><a class="dropdown-item" href="#">This Year</a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="card-body">
                        <div class="flex-wrap d-flex align-items-center justify-content-between">
                            <div id="myChart" class="col-md-8 col-lg-8 myChart"></div>
                            <div class="d-grid gap col-md-4 col-lg-4">
                                <div class="d-flex align-items-start">
                                    <svg class="mt-2 icon-14" xmlns="http://www.w3.org/2000/svg" width="14" viewBox="0 0 24 24" fill="#3a57e8">
                              <g>
                                 <circle cx="12" cy="12" r="8" fill="#3a57e8"></circle>
                              </g>
                           </svg>
                                    <div class="ms-3">
                                        <span class="text-gray">Fashion</span>
                                        <h6>251K</h6>
                                    </div>
                                </div>
                                <div class="d-flex align-items-start">
                                    <svg class="mt-2 icon-14" xmlns="http://www.w3.org/2000/svg" width="14" viewBox="0 0 24 24" fill="#4bc7d2">
                              <g>
                                 <circle cx="12" cy="12" r="8" fill="#4bc7d2"></circle>
                              </g>
                           </svg>
                                    <div class="ms-3">
                                        <span class="text-gray">Accessories</span>
                                        <h6>176K</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-md-12 col-xl-6">
                <div class="card" data-aos="fade-up" data-aos-delay="1000">
                    <div class="flex-wrap card-header d-flex justify-content-between">
                        <div class="header-title">
                            <h4 class="card-title">Conversions</h4>
                        </div>
                        <div class="dropdown">
                            <a href="#" class="text-gray dropdown-toggle" id="dropdownMenuButton3" data-bs-toggle="dropdown" aria-expanded="false">
                        This Week
                     </a>
                            <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="dropdownMenuButton3">
                                <li><a class="dropdown-item" href="#">This Week</a></li>
                                <li><a class="dropdown-item" href="#">This Month</a></li>
                                <li><a class="dropdown-item" href="#">This Year</a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="card-body">
                        <div id="d-activity" class="d-activity"></div>
                    </div>
                </div>
            </div>
            <div class="col-md-12 col-lg-12">
                <div class="overflow-hidden card" data-aos="fade-up" data-aos-delay="600">
                    <div class="flex-wrap card-header d-flex justify-content-between">
                        <div class="header-title">
                            <h4 class="mb-2 card-title">Enterprise Clients</h4>
                            <p class="mb-0">
                                <svg class="me-2 text-primary icon-24" width="24" viewBox="0 0 24 24">
                           <path fill="currentColor" d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z" />
                        </svg> 15 new acquired this month
                            </p>
                        </div>
                    </div>
                    <div class="p-0 card-body">
                        <div class="mt-4 table-responsive">
                            <table id="basic-table" class="table mb-0 table-striped" role="grid">
                                <thead>
                                    <tr>
                                        <th>COMPANIES</th>
                                        <th>CONTACTS</th>
                                        <th>ORDER</th>
                                        <th>COMPLETION</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>
                                            <div class="d-flex align-items-center">
                                                <img class="rounded bg-soft-primary img-fluid avatar-40 me-3" src="../assets/images/shapes/01.png" alt="profile">
                                                <h6>Addidis Sportwear</h6>
                                            </div>
                                        </td>
                                        <td>
                                            <div class="iq-media-group iq-media-group-1">
                                                <a href="#" class="iq-media-1">
                                                    <div class="icon iq-icon-box-3 rounded-pill">SP</div>
                                                </a>
                                                <a href="#" class="iq-media-1">
                                                    <div class="icon iq-icon-box-3 rounded-pill">PP</div>
                                                </a>
                                                <a href="#" class="iq-media-1">
                                                    <div class="icon iq-icon-box-3 rounded-pill">MM</div>
                                                </a>
                                            </div>
                                        </td>
                                        <td>$14,000</td>
                                        <td>
                                            <div class="mb-2 d-flex align-items-center">
                                                <h6>60%</h6>
                                            </div>
                                            <div class="shadow-none progress bg-soft-primary w-100" style="height: 4px">
                                                <div class="progress-bar bg-primary" data-toggle="progress-bar" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100"></div>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div class="d-flex align-items-center">
                                                <img class="rounded bg-soft-primary img-fluid avatar-40 me-3" src="../assets/images/shapes/05.png" alt="profile">
                                                <h6>Netflixer Platforms</h6>
                                            </div>
                                        </td>
                                        <td>
                                            <div class="iq-media-group iq-media-group-1">
                                                <a href="#" class="iq-media-1">
                                                    <div class="icon iq-icon-box-3 rounded-pill">SP</div>
                                                </a>
                                                <a href="#" class="iq-media-1">
                                                    <div class="icon iq-icon-box-3 rounded-pill">PP</div>
                                                </a>
                                            </div>
                                        </td>
                                        <td>$30,000</td>
                                        <td>
                                            <div class="mb-2 d-flex align-items-center">
                                                <h6>25%</h6>
                                            </div>
                                            <div class="shadow-none progress bg-soft-primary w-100" style="height: 4px">
                                                <div class="progress-bar bg-primary" data-toggle="progress-bar" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div class="d-flex align-items-center">
                                                <img class="rounded bg-soft-primary img-fluid avatar-40 me-3" src="../assets/images/shapes/02.png" alt="profile">
                                                <h6>Shopifi Stores</h6>
                                            </div>
                                        </td>
                                        <td>
                                            <div class="iq-media-group iq-media-group-1">
                                                <a href="#" class="iq-media-1">
                                                    <div class="icon iq-icon-box-3 rounded-pill">PP</div>
                                                </a>
                                                <a href="#" class="iq-media-1">
                                                    <div class="icon iq-icon-box-3 rounded-pill">TP</div>
                                                </a>
                                            </div>
                                        </td>
                                        <td>$8,500</td>
                                        <td>
                                            <div class="mb-2 d-flex align-items-center">
                                                <h6>100%</h6>
                                            </div>
                                            <div class="shadow-none progress bg-soft-success w-100" style="height: 4px">
                                                <div class="progress-bar bg-success" data-toggle="progress-bar" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div class="d-flex align-items-center">
                                                <img class="rounded bg-soft-primary img-fluid avatar-40 me-3" src="../assets/images/shapes/03.png" alt="profile">
                                                <h6>Bootstrap Technologies</h6>
                                            </div>
                                        </td>
                                        <td>
                                            <div class="iq-media-group iq-media-group-1">
                                                <a href="#" class="iq-media-1">
                                                    <div class="icon iq-icon-box-3 rounded-pill">SP</div>
                                                </a>
                                                <a href="#" class="iq-media-1">
                                                    <div class="icon iq-icon-box-3 rounded-pill">PP</div>
                                                </a>
                                                <a href="#" class="iq-media-1">
                                                    <div class="icon iq-icon-box-3 rounded-pill">MM</div>
                                                </a>
                                                <a href="#" class="iq-media-1">
                                                    <div class="icon iq-icon-box-3 rounded-pill">TP</div>
                                                </a>
                                            </div>
                                        </td>
                                        <td>$20,500</td>
                                        <td>
                                            <div class="mb-2 d-flex align-items-center">
                                                <h6>100%</h6>
                                            </div>
                                            <div class="shadow-none progress bg-soft-success w-100" style="height: 4px">
                                                <div class="progress-bar bg-success" data-toggle="progress-bar" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div class="d-flex align-items-center">
                                                <img class="rounded bg-soft-primary img-fluid avatar-40 me-3" src="../assets/images/shapes/04.png" alt="profile">
                                                <h6>Community First</h6>
                                            </div>
                                        </td>
                                        <td>
                                            <div class="iq-media-group iq-media-group-1">
                                                <a href="#" class="iq-media-1">
                                                    <div class="icon iq-icon-box-3 rounded-pill">MM</div>
                                                </a>
                                            </div>
                                        </td>
                                        <td>$9,800</td>
                                        <td>
                                            <div class="mb-2 d-flex align-items-center">
                                                <h6>75%</h6>
                                            </div>
                                            <div class="shadow-none progress bg-soft-primary w-100" style="height: 4px">
                                                <div class="progress-bar bg-primary" data-toggle="progress-bar" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
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
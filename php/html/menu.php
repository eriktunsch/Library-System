<!doctype html>
<html lang="de" dir="ltr">
<?php echo "<script type='text/javascript'>window.url = '" . $Settings->getSettings('url') . "'</script>"; ?>

<head>
    <title><?php echo $Settings->getSettings("html_title"); ?> - <?php echo $title; ?></title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <?php echo $LoadResource->insertJS("external/jquery.js", true); ?>
    <?php //echo $LoadResource->insertJS("core/libs.js", true); ?>
    <?php echo $LoadResource->insertJS("core/external.js", true); ?>
    <?php echo $LoadResource->insertJS("external/flatpickr.js", true); ?>
    <?php echo $LoadResource->insertJS("external/aos.js", true); ?>
    <?php echo $LoadResource->insertJS("external/filepond.js"); ?>
    <?php echo $LoadResource->insertJS("external/filepond-preview.js"); ?>
    <?php echo $LoadResource->insertJS("external/filepond-encode.js"); ?>
    <?php echo $LoadResource->insertJS("external/filepond-validate.js"); ?>
    <?php echo $LoadResource->insertJS("external/filepond-get.js"); ?>
    <?php echo $LoadResource->insertJS("hope-ui.js", true); ?>
    <?php echo $LoadResource->insertJS("external/tagsinput.js"); ?>
    <?php echo $LoadResource->insertJS("request.js"); ?>
    <?php echo $LoadResource->insertJS("external/izitoast.js"); ?>
    <?php echo $LoadResource->insertJS("external/sweetalert.js"); ?>
    <?php echo $LoadResource->insertJS("footer/izitoast.js"); ?>
    <?php echo $LoadResource->insertJS("footer/base64.js"); ?>
    <?php echo $LoadResource->insertJS("footer/utils.js"); ?>
    <?php echo $LoadResource->insertJS("external/datatables.js", true); ?>
    
    <?php echo $LoadResource->insertCSS("core/libs.css", true); ?>
    <?php echo $LoadResource->insertCSS("external/aos.css", true); ?>
    <?php echo $LoadResource->insertCSS("hope-ui.css", true); ?>
    <?php echo $LoadResource->insertCSS("custom.css", true); ?>
    <?php echo $LoadResource->insertCSS("dark.css", true); ?>
    <?php echo $LoadResource->insertCSS("customizer.css", true); ?>
    <?php echo $LoadResource->insertCSS("external/tagsinput.css", true); ?>
    <?php echo $LoadResource->insertCSS("external/izitoast.css", true); ?>
    <?php echo $LoadResource->insertCSS("external/sweetalert.css", true); ?>
    <?php echo $LoadResource->insertCSS("external/filepond.css", true); ?>
    <?php echo $LoadResource->insertCSS("external/filepond-preview.css", true); ?>
    <?php echo $LoadResource->insertCSS("external/filepond-get.css", true); ?>
    <?php echo $LoadResource->insertCSS("core/flatpickr.css", true); ?>
    <?php echo $LoadResource->insertCSS("external/datatables.css", true); ?>
    <?php echo $LoadResource->insertCSS("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css", true, true); ?>
</head>

<body class="dark">
    <!-- loader Start 
    <div id="loading">
        <div class="loader simple-loader">
            <div class="loader-body"></div>
        </div>
    </div>
    <!-- loader END -->

    <aside class="sidebar sidebar-default sidebar-white sidebar-base navs-rounded-all ">
        <div class="sidebar-header d-flex align-items-center justify-content-start">
            <a href="/" class="navbar-brand">
                <!--Logo start-->
                <!--logo End-->
                <!--Logo start-->
                <div class="logo-main">
                    <div class="logo-normal">
                        <img class="icon-50" style="width:auto" src="/images/logo/logo.png" />
                    </div>
                    <div class="logo-mini">
                        <img class="icon-50" style="width:auto" src="/images/logo/logo.png" />
                    </div>
                </div>
                <!--logo End-->
                <!--<h4 class="logo-title"><?php echo $Settings->getSettings('html_title'); ?></h4>-->
            </a>
        </div>
        <div class="sidebar-body pt-0 data-scrollbar">
            <div class="sidebar-list">
                <!-- Sidebar Menu Start -->
                <ul class="navbar-nav iq-main-menu" id="sidebar-menu">
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="/">
                            <i class="icon">
                                <svg width="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="icon-20">
                                    <path opacity="0.4" d="M16.0756 2H19.4616C20.8639 2 22.0001 3.14585 22.0001 4.55996V7.97452C22.0001 9.38864 20.8639 10.5345 19.4616 10.5345H16.0756C14.6734 10.5345 13.5371 9.38864 13.5371 7.97452V4.55996C13.5371 3.14585 14.6734 2 16.0756 2Z" fill="currentColor"></path>
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M4.53852 2H7.92449C9.32676 2 10.463 3.14585 10.463 4.55996V7.97452C10.463 9.38864 9.32676 10.5345 7.92449 10.5345H4.53852C3.13626 10.5345 2 9.38864 2 7.97452V4.55996C2 3.14585 3.13626 2 4.53852 2ZM4.53852 13.4655H7.92449C9.32676 13.4655 10.463 14.6114 10.463 16.0255V19.44C10.463 20.8532 9.32676 22 7.92449 22H4.53852C3.13626 22 2 20.8532 2 19.44V16.0255C2 14.6114 3.13626 13.4655 4.53852 13.4655ZM19.4615 13.4655H16.0755C14.6732 13.4655 13.537 14.6114 13.537 16.0255V19.44C13.537 20.8532 14.6732 22 16.0755 22H19.4615C20.8637 22 22 20.8532 22 19.44V16.0255C22 14.6114 20.8637 13.4655 19.4615 13.4655Z" fill="currentColor"></path>
                                </svg>
                            </i>
                            <span class="item-name">Dashboard</span>
                        </a>
                    </li>

                    <li class="nav-item">
                        <a class="nav-link" aria-current="page" href="/rent">
                            <i class="icon">
                                <svg class="icon-20" width="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path opacity="0.4" fill-rule="evenodd" clip-rule="evenodd" d="M5.91064 20.5886C5.91064 19.7486 6.59064 19.0686 7.43064 19.0686C8.26064 19.0686 8.94064 19.7486 8.94064 20.5886C8.94064 21.4186 8.26064 22.0986 7.43064 22.0986C6.59064 22.0986 5.91064 21.4186 5.91064 20.5886ZM17.1606 20.5886C17.1606 19.7486 17.8406 19.0686 18.6806 19.0686C19.5106 19.0686 20.1906 19.7486 20.1906 20.5886C20.1906 21.4186 19.5106 22.0986 18.6806 22.0986C17.8406 22.0986 17.1606 21.4186 17.1606 20.5886Z" fill="currentColor"></path>
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M20.1907 6.34909C20.8007 6.34909 21.2007 6.55909 21.6007 7.01909C22.0007 7.47909 22.0707 8.13909 21.9807 8.73809L21.0307 15.2981C20.8507 16.5591 19.7707 17.4881 18.5007 17.4881H7.59074C6.26074 17.4881 5.16074 16.4681 5.05074 15.1491L4.13074 4.24809L2.62074 3.98809C2.22074 3.91809 1.94074 3.52809 2.01074 3.12809C2.08074 2.71809 2.47074 2.44809 2.88074 2.50809L5.26574 2.86809C5.60574 2.92909 5.85574 3.20809 5.88574 3.54809L6.07574 5.78809C6.10574 6.10909 6.36574 6.34909 6.68574 6.34909H20.1907ZM14.1307 11.5481H16.9007C17.3207 11.5481 17.6507 11.2081 17.6507 10.7981C17.6507 10.3781 17.3207 10.0481 16.9007 10.0481H14.1307C13.7107 10.0481 13.3807 10.3781 13.3807 10.7981C13.3807 11.2081 13.7107 11.5481 14.1307 11.5481Z" fill="currentColor"></path>
                                </svg>
                            </i>
                            <span class="item-name"><?php if ($Login->isLoggedin()) { ?> Ausleih / Rückgabe <?php } else { ?>Rückgabe<?php } ?></span>
                        </a>
                    </li>

                    <li class="nav-item">
                        <a class="nav-link" aria-current="page" href="/search">
                            <i class="icon">
                                <svg class="icon-20" width="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <ellipse cx="10.5992" cy="10.6532" rx="8.59922" ry="8.65324" fill="currentColor"></ellipse>
                                    <path opacity="0.4" d="M20.6745 21.9553C20.3405 21.9445 20.0228 21.807 19.7853 21.5705L17.7488 19.1902C17.3122 18.7909 17.2765 18.1123 17.6688 17.6689C17.8524 17.4831 18.102 17.3787 18.3624 17.3787C18.6228 17.3787 18.8725 17.4831 19.0561 17.6689L21.6172 19.7181C21.9861 20.0957 22.0999 20.6563 21.9078 21.1492C21.7157 21.6422 21.2535 21.9754 20.7279 22L20.6745 21.9553Z" fill="currentColor"></path>
                                </svg>
                            </i>
                            <span class="item-name">Suche</span>
                        </a>
                    </li>
                    <?php if ($Login->isLoggedin() && $User->isAdmin()) { ?>
                        <li class="nav-item">
                            <a class="nav-link" aria-current="page" href="/admin">
                                <i class="icon">
                                    <svg class="icon-20" width="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12.0122 14.8299C10.4077 14.8299 9.10986 13.5799 9.10986 12.0099C9.10986 10.4399 10.4077 9.17993 12.0122 9.17993C13.6167 9.17993 14.8839 10.4399 14.8839 12.0099C14.8839 13.5799 13.6167 14.8299 12.0122 14.8299Z" fill="currentColor"></path>
                                        <path opacity="0.4" d="M21.2301 14.37C21.036 14.07 20.76 13.77 20.4023 13.58C20.1162 13.44 19.9322 13.21 19.7687 12.94C19.2475 12.08 19.5541 10.95 20.4228 10.44C21.4447 9.87 21.7718 8.6 21.179 7.61L20.4943 6.43C19.9118 5.44 18.6344 5.09 17.6226 5.67C16.7233 6.15 15.5685 5.83 15.0473 4.98C14.8838 4.7 14.7918 4.4 14.8122 4.1C14.8429 3.71 14.7203 3.34 14.5363 3.04C14.1582 2.42 13.4735 2 12.7172 2H11.2763C10.5302 2.02 9.84553 2.42 9.4674 3.04C9.27323 3.34 9.16081 3.71 9.18125 4.1C9.20169 4.4 9.10972 4.7 8.9462 4.98C8.425 5.83 7.27019 6.15 6.38109 5.67C5.35913 5.09 4.09191 5.44 3.49917 6.43L2.81446 7.61C2.23194 8.6 2.55897 9.87 3.57071 10.44C4.43937 10.95 4.74596 12.08 4.23498 12.94C4.06125 13.21 3.87729 13.44 3.59115 13.58C3.24368 13.77 2.93709 14.07 2.77358 14.37C2.39546 14.99 2.4159 15.77 2.79402 16.42L3.49917 17.62C3.87729 18.26 4.58245 18.66 5.31825 18.66C5.66572 18.66 6.0745 18.56 6.40153 18.36C6.65702 18.19 6.96361 18.13 7.30085 18.13C8.31259 18.13 9.16081 18.96 9.18125 19.95C9.18125 21.1 10.1215 22 11.3069 22H12.6968C13.872 22 14.8122 21.1 14.8122 19.95C14.8429 18.96 15.6911 18.13 16.7029 18.13C17.0299 18.13 17.3365 18.19 17.6022 18.36C17.9292 18.56 18.3278 18.66 18.6855 18.66C19.411 18.66 20.1162 18.26 20.4943 17.62L21.2097 16.42C21.5776 15.75 21.6083 14.99 21.2301 14.37Z" fill="currentColor"></path>
                                    </svg>
                                </i>
                                <span class="item-name">Verwaltung</span>
                            </a>
                        </li>
                    <?php } ?>
                </ul>
                <!-- Sidebar Menu End -->
            </div>
        </div>
        <div class="sidebar-footer"></div>
    </aside>
    <main class="main-content">
        <div class="position-relative iq-banner">
            <!--Nav Start-->
            <nav class="nav navbar navbar-expand-lg navbar-light iq-navbar">
                <div class="container-fluid navbar-inner">
                    <a href="/" class="navbar-brand">
                        <!--Logo start-->
                        <!--logo End-->

                        <!--Logo start-->
                        <div class="logo-main">
                            <div class="logo-normal">
                                <img class="icon-40" style="width:auto" src="/images/logo/logo.png" />
                            </div>
                            <div class="logo-mini">
                                <img class="icon-40" style="width:auto" src="/images/logo/logo.png" />
                            </div>
                        </div>
                        <!--logo End-->




                        <!--<h4 class="logo-title"><?php echo $Settings->getSettings('html_title'); ?></h4>-->
                    </a>
                    <div class="sidebar-toggle" data-toggle="sidebar" data-active="true">
                        <i class="icon">
                            <svg width="20px" class="icon-20" viewBox="0 0 24 24">
                                <path d="M4 18L20 18" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
                                <path d="M4 12L20 12" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
                                <path d="M4 6L20 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
                            </svg>
                        </i>
                    </div>
                    <ul class="mb-2 navbar-nav ms-auto align-items-center navbar-list mb-lg-0">
                        <li class="nav-item dropdown">
                            <a class="py-0 nav-link d-flex align-items-center" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                <img src="/images/avatars/01.png" alt="User-Profile" class="theme-color-default-img img-fluid avatar avatar-50 avatar-rounded">
                                <div class="caption ms-3 d-none d-md-block ">
                                    <h6 class="mb-0 caption-title"><?php echo $User->getName(); ?></h6>
                                    <p class="mb-0 caption-sub-title"><?php echo ($User->isAdmin() == true) ? "Administrator/in" : "Schüler/in"; ?></p>
                                </div>
                            </a>
                            <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
                                <li><a class="dropdown-item" href="/user">Profile</a></li>
                                <li>
                                    <hr class="dropdown-divider">
                                </li>
                                <li><a class="dropdown-item" href="/logout">Logout</a></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </nav>
            <!-- Nav Header Component Start -->
            <div class="iq-navbar-header" style="height: 150px;">
                <div class="container-fluid iq-container">
                    <div class="row">
                        <div class="col-md-12">
                            <div class="flex-wrap d-flex justify-content-between align-items-center">
                                <div>
                                    <h1><?php echo $title; ?></h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="iq-header-img">
                    <img src="/images/dashboard/top-header.png" alt="header" class="theme-color-default-img img-fluid w-100 h-100 animated-scaleX">
                </div>
            </div>
            <!-- Nav Header Component End -->
            <!--Nav End-->
        </div>
        <div class="conatiner-fluid content-inner mt-n5 py-0">
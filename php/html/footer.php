  <!-- Site footer -->
  <footer class="site-footer" style="bottom: 0px; margin-top:50px; width:100%;">
    <!--<div class="container">
      <div class="row">
        <div class="col-sm-12 col-md-6">
          <h6>About</h6>
          <p class="text-justify">Humboldt-Makerspace Basket (Stellar Occultation Data Input System) is the data collection programme of IOTA/ES for observations of stellar occultations by asteroids, comets, planets and their moons in our solar system. Technical support of Humboldt-Makerspace Basket is maintained by Erik Trunsch for IOTA/ES.</p>
        </div>

        <div class="col-xs-6 col-md-3">
          <h6>Important Links</h6>
          <ul class="footer-links">
            <li><a href="https://iota-es.de/impressum.html">Imprint</a></li>
            <li><a href="https://iota-es.de/iota-dsgvox1.html">Privacy Policy</a></li>
            <li><a href="/cookies/">Cookie Directive</a></li>
          </ul>
        </div>
      </div>
      <hr>
    </div>-->
    <div class="container">
      <div class="row">
        <div style="margin: 0 auto; text-align: center">
          <p class="copyright-text">© 2023 Erik Tunsch - All Rights Reserved.

          </p>
        </div>
      </div>
    </div>
  </footer>



  </div>
  <?php
  echo $LoadResource->insertJS("https://cdn.jsdelivr.net/npm/lazyload@2.0.0-rc.2/lazyload.js", true, true);
  echo $LoadResource->insertJS("request.js");
  echo $LoadResource->insertJS("autocomplete.js", true);
  echo $LoadResource->insertJS("footer/base64.js");
  echo $LoadResource->insertJS("footer/countAnimation.js");
  echo $LoadResource->insertJS("footer/headline.js");
  echo $LoadResource->insertJS("footer/izitoast.js");
  echo $LoadResource->insertJS("footer/popover.js");
  echo $LoadResource->insertJS("footer/tables.js");
  echo $LoadResource->insertJS("footer/tooltip.js");
  echo $LoadResource->insertJS("footer/utf8.js");
  echo $LoadResource->insertJS("footer/utils.js", true);
  echo $LoadResource->insertJS("footer/readcookie.js");

  ?>
  </body>

  </html>
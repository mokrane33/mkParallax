# mkParallax
jquery parallax 
image backgroud parallax image, work with mobile devices 

Example using jsDelivr
Just add the js file before your closing <body> tag add:
  <script type="text/javascript" src="js/mkParallax.js"></script
How to use
    First create your container 
    <div id="myparallex" data-image="img/my-parallax-image.jpg">
        ..........
    </div>
    and
  $( document ).ready(function() {
    $("#myparallex").mkParallax();
  });
License
Copyright (c) 2017 Ken Wheeler

Licensed under the MIT license.

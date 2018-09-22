# mkParallax
-------

jquery parallax
---

Backgroud parallax image, work with mobile devices 

Example using  mkParallax
----

Just add the js file before your closing <body> tag add:
 
 <script type="text/javascript" src="js/mkParallax.js"></script>
 
How to use 
--
First create your container
-
    <div id="myparallex" data-image="img/my-parallax-image.jpg">
		
        ..........
				
    </div>
    
and JQuery script
-
  $( document ).ready(function() {
	
    $("#myparallex").mkParallax();
		
  });
	
License
-
Copyright (c) 2017 Mokrane K

Licensed under the MIT license.

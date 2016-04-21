# Simple Parallax for the web developers.

You can see the Demo here: http://web.kupibo.com.ua/_demo/js/parallax

#### You should add:

  - jquery-1.11.0.min.js
  - jquery.parallax.css
  - jquery.parallax.js

#### Initialisation

    <div class="parallax1"></div>
	<div class="parallax2"></div>
    
#

    <script>
  		$(document).ready(function (){
  		 $('#parallax1').parallax(10,1);
		   $('#parallax2').parallax(50,2);
  		});
	  </script>
		
Where:
  - '10' - speed in %
  - '1' - z-index of your block
  - You can add differend values.

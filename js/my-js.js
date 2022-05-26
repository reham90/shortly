$(document).ready(function() {

  // start js for navbar //
    $(function() { // DOM ready
  
   
        // Toggle open and close nav styles on click
        $('.nav-toggle').click(function() {
          $('.nav-list').slideToggle();
        });
        // Hamburger to X toggle
        $('.nav-toggle').on('click', function() {
          this.classList.toggle('active');
        });
      });

// end  js for navbar //

    // start js for short-link //


 
      /// wow js ///
    new WOW().init();
});

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

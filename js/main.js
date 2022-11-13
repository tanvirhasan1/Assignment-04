(function ($) {
    "use strict";

    // mobile menu 
    $('#mobile-menu').meanmenu({
        meanScreenWidth: "991",
        meanMenuContainer: '.mobile-menu'
      });

    // slider active
    $('.slider-active').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    })


})(jQuery);
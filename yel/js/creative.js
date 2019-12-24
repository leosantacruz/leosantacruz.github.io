(function ($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top - 72)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });


  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function () {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#mainNav',
    offset: 75
  });


  // Collapse Navbar
  var navbarCollapse = function () {
    if ($("#mainNav").offset().top > 100) {
      $("#mainNav").addClass("navbar-scrolled");
      $(".js-scroll-trigger img").attr("src", "img/Yel_logo.svg")
      $(".fa-bars").removeClass("text-white")
    } else {
      $(".js-scroll-trigger img").attr("src", "img/Yel_logo_white.svg")
      $("#mainNav").removeClass("navbar-scrolled");
      $(".fa-bars").addClass("text-white")
    }
  };


  navbarCollapse();

  $('body').bind('touchmove', navbarCollapse);
  $(window).scroll(navbarCollapse);


  $('.count').each(function () {
    $(this).prop('Counter', 0).animate({
      Counter: $(this).text()
    }, {
      duration: 1000,
      easing: 'swing',
      step: function (now) {
        $(this).text(Math.ceil(now));
      }
    });
  });


  $(".countrySelector").click(function () {
    $(".countrySelector").removeClass("active")
    $(this).addClass("active")
    $(".sucursal").hide()

    let country = $(this).attr("data-country")
    $(".sucursal-" + country).show()

  })

})(jQuery); // End of use strict

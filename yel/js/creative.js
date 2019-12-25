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


    if ($('.navbar-toggler.navbar-toggler-right').attr("aria-expanded") == 'false') {
      if ($("#mainNav").offset().top > 100) {
        $("#mainNav").addClass("navbar-scrolled");
        $(".js-scroll-trigger img").attr("src", "img/Yel_logo.svg").css('width', "120")
        $(".fa-bars").removeClass("text-white")
      } else {
        $(".js-scroll-trigger img").attr("src", "img/Yel_logo_white.svg").css('width', "170")
        $("#mainNav").removeClass("navbar-scrolled bg-white");
        $(".fa-bars").addClass("text-white")
      }
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

  //Carousel progress bar
  $('#carouselExampleIndicators').on('slide.bs.carousel', function (e) {
    $(document).find(".progress-carousel").remove()
    $("#carousel-home li[data-slide-to=" + e.to + "]").html('<div class="progress-carousel"></div>')
  })

  //Responsive menu

  $('.navbar-toggler.navbar-toggler-right').on('click', function () {


    if ($("#mainNav").offset().top < 100 && $('.navbar-toggler.navbar-toggler-right').attr("aria-expanded") == 'true') {
      $("#mainNav").removeClass("bg-white navbar-scrolled")
      $(".fa-bars").addClass("text-white")
      $(".js-scroll-trigger img").attr("src", "img/Yel_logo_white.svg").css('width', "170")
    }
    else {
      $("#mainNav").addClass("bg-white")
      $(".fa-bars").removeClass("text-white")
      $(".js-scroll-trigger img").attr("src", "img/Yel_logo.svg").css('width', "120")
    }

  })

})(jQuery); // End of use strict

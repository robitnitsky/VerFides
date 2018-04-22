// You can write a call and import your functions in this file.
//
// This file will be compiled into app.js and will not be minified.
// Feel free with using ES6 here.


( ($) => {
	'use strict';
  $('.slider').slick({
    infinite: true,
    slidesToShow: 1,
    rows: 0,
    centerMode: true,
    centerPadding: '240px',
    prevArrow: '<button type="button" class="slick-prev"><span class="icon-slider-arrow-left"></span></button>',
    nextArrow: '<button type="button" class="slick-next"><span class="icon-slider-arrow-right"></span></button>',

    responsive: [
      {
        breakpoint: 1200,
        settings: {
          centerPadding: '150px',
        }
      },
      {
        breakpoint: 1024,
        settings: {
          centerPadding: '100px',
        }
      },
      {
        breakpoint: 768,
        settings: "unslick" // destroys slick
      }
      ]
    });

  $('body').mobileNav({
    menuActiveClass: 'nav-active',
    menuOpener: '.nav-opener',
    hideOnClickOutside: true,
    menuDrop: '.navigation-holder'
  });

  $('.bg-stretch').retinaCover();

  smoothScroll('.anchor-link');

})(jQuery);


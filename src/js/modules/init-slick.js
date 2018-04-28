// This is an examples of simple export.
//
// You can remove or add your own function in this file.

function initSlick() {
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

  $(window).on('resize orientationchange', function() {
    if(window.innerWidth >= 768){
      $('.slider').slick('resize');
      }
  });
}

export default initSlick;
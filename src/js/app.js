// You can write a call and import your functions in this file.
//
// This file will be compiled into app.js and will not be minified.
// Feel free with using ES6 here.

import initMobileNav from './modules/mobile-nav.js';
import initRetinaCover from './modules/retina-cover.js';
import smoothScroll from './modules/smooth-scroll.js';
import initSlick from './modules/init-slick.js';

( ($) => {
  'use strict';
  
  initMobileNav();

  initRetinaCover();

  smoothScroll('.anchor-link');

  initSlick();

})(jQuery);


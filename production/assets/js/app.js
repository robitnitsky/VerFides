(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

// You can write a call and import your functions in this file.
//
// This file will be compiled into app.js and will not be minified.
// Feel free with using ES6 here.


(function ($) {
  'use strict';

  $('.slider').slick({
    infinite: true,
    slidesToShow: 1,
    rows: 0,
    centerMode: true,
    centerPadding: '240px',
    prevArrow: '<button type="button" class="slick-prev"><span class="icon-slider-arrow-left"></span></button>',
    nextArrow: '<button type="button" class="slick-next"><span class="icon-slider-arrow-right"></span></button>',

    responsive: [{
      breakpoint: 1200,
      settings: {
        centerPadding: '150px'
      }
    }, {
      breakpoint: 1024,
      settings: {
        centerPadding: '100px'
      }
    }, {
      breakpoint: 768,
      settings: "unslick" // destroys slick
    }]
  });

  $(window).on('resize orientationchange', function () {
    if (window.innerWidth >= 768) {
      $('.slider').slick('resize');
    }
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

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvanMvYXBwLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7QUNBQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0EsQ0FBRSxVQUFDLENBQUQsRUFBTztBQUNSOztBQUNDLElBQUUsU0FBRixFQUFhLEtBQWIsQ0FBbUI7QUFDakIsY0FBVSxJQURPO0FBRWpCLGtCQUFjLENBRkc7QUFHakIsVUFBTSxDQUhXO0FBSWpCLGdCQUFZLElBSks7QUFLakIsbUJBQWUsT0FMRTtBQU1qQixlQUFXLGdHQU5NO0FBT2pCLGVBQVcsaUdBUE07O0FBU2pCLGdCQUFZLENBQ1Y7QUFDRSxrQkFBWSxJQURkO0FBRUUsZ0JBQVU7QUFDUix1QkFBZTtBQURQO0FBRlosS0FEVSxFQU9WO0FBQ0Usa0JBQVksSUFEZDtBQUVFLGdCQUFVO0FBQ1IsdUJBQWU7QUFEUDtBQUZaLEtBUFUsRUFhVjtBQUNFLGtCQUFZLEdBRGQ7QUFFRSxnQkFBVSxTQUZaLENBRXNCO0FBRnRCLEtBYlU7QUFUSyxHQUFuQjs7QUE2QkEsSUFBRSxNQUFGLEVBQVUsRUFBVixDQUFhLDBCQUFiLEVBQXlDLFlBQVc7QUFDbEQsUUFBRyxPQUFPLFVBQVAsSUFBcUIsR0FBeEIsRUFBNEI7QUFDMUIsUUFBRSxTQUFGLEVBQWEsS0FBYixDQUFtQixRQUFuQjtBQUNDO0FBQ0osR0FKRDs7QUFNQSxJQUFFLE1BQUYsRUFBVSxTQUFWLENBQW9CO0FBQ2xCLHFCQUFpQixZQURDO0FBRWxCLGdCQUFZLGFBRk07QUFHbEIsd0JBQW9CLElBSEY7QUFJbEIsY0FBVTtBQUpRLEdBQXBCOztBQU9BLElBQUUsYUFBRixFQUFpQixXQUFqQjs7QUFFQSxlQUFhLGNBQWI7QUFFRCxDQWhERCxFQWdERyxNQWhESCIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCIvLyBZb3UgY2FuIHdyaXRlIGEgY2FsbCBhbmQgaW1wb3J0IHlvdXIgZnVuY3Rpb25zIGluIHRoaXMgZmlsZS5cbi8vXG4vLyBUaGlzIGZpbGUgd2lsbCBiZSBjb21waWxlZCBpbnRvIGFwcC5qcyBhbmQgd2lsbCBub3QgYmUgbWluaWZpZWQuXG4vLyBGZWVsIGZyZWUgd2l0aCB1c2luZyBFUzYgaGVyZS5cblxuXG4oICgkKSA9PiB7XG5cdCd1c2Ugc3RyaWN0JztcbiAgJCgnLnNsaWRlcicpLnNsaWNrKHtcbiAgICBpbmZpbml0ZTogdHJ1ZSxcbiAgICBzbGlkZXNUb1Nob3c6IDEsXG4gICAgcm93czogMCxcbiAgICBjZW50ZXJNb2RlOiB0cnVlLFxuICAgIGNlbnRlclBhZGRpbmc6ICcyNDBweCcsXG4gICAgcHJldkFycm93OiAnPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJzbGljay1wcmV2XCI+PHNwYW4gY2xhc3M9XCJpY29uLXNsaWRlci1hcnJvdy1sZWZ0XCI+PC9zcGFuPjwvYnV0dG9uPicsXG4gICAgbmV4dEFycm93OiAnPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJzbGljay1uZXh0XCI+PHNwYW4gY2xhc3M9XCJpY29uLXNsaWRlci1hcnJvdy1yaWdodFwiPjwvc3Bhbj48L2J1dHRvbj4nLFxuXG4gICAgcmVzcG9uc2l2ZTogW1xuICAgICAge1xuICAgICAgICBicmVha3BvaW50OiAxMjAwLFxuICAgICAgICBzZXR0aW5nczoge1xuICAgICAgICAgIGNlbnRlclBhZGRpbmc6ICcxNTBweCcsXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGJyZWFrcG9pbnQ6IDEwMjQsXG4gICAgICAgIHNldHRpbmdzOiB7XG4gICAgICAgICAgY2VudGVyUGFkZGluZzogJzEwMHB4JyxcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgYnJlYWtwb2ludDogNzY4LFxuICAgICAgICBzZXR0aW5nczogXCJ1bnNsaWNrXCIgLy8gZGVzdHJveXMgc2xpY2tcbiAgICAgIH1cbiAgICAgIF1cbiAgICB9KTtcblxuICAkKHdpbmRvdykub24oJ3Jlc2l6ZSBvcmllbnRhdGlvbmNoYW5nZScsIGZ1bmN0aW9uKCkge1xuICAgIGlmKHdpbmRvdy5pbm5lcldpZHRoID49IDc2OCl7XG4gICAgICAkKCcuc2xpZGVyJykuc2xpY2soJ3Jlc2l6ZScpO1xuICAgICAgfVxuICB9KTtcblxuICAkKCdib2R5JykubW9iaWxlTmF2KHtcbiAgICBtZW51QWN0aXZlQ2xhc3M6ICduYXYtYWN0aXZlJyxcbiAgICBtZW51T3BlbmVyOiAnLm5hdi1vcGVuZXInLFxuICAgIGhpZGVPbkNsaWNrT3V0c2lkZTogdHJ1ZSxcbiAgICBtZW51RHJvcDogJy5uYXZpZ2F0aW9uLWhvbGRlcidcbiAgfSk7XG5cbiAgJCgnLmJnLXN0cmV0Y2gnKS5yZXRpbmFDb3ZlcigpO1xuXG4gIHNtb290aFNjcm9sbCgnLmFuY2hvci1saW5rJyk7XG5cbn0pKGpRdWVyeSk7XG5cbiJdfQ==

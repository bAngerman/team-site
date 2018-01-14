/**
 * Kicks off the slick.js carousel for our home page
 */
(function(exports, $) {
  'use strict';

  $('.carousel').slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    infinite: true,
    arrows: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });

}(this, jQuery));
(function($, exports) {

  'use strict';

  var PRELOADER = (function() {

    var $p    = $('#preloader'),
        $pbg  = $('#preloader-bg'),
        $gradient = $('.fullscreen-bg__gradient'),
        limit = 10,
        randomnumber = Math.floor(Math.random() * (limit));

    function _show() {
      $p.addClass('bg-' + randomnumber + ' active')
      $gradient.addClass('bg-' + randomnumber);
    }

    function _remove() {
      $p.addClass('active-loaded');
      setTimeout(function(){
        $pbg.addClass('loaded');
      }, 600)
    }

    return {
        show: _show,
        remove: _remove
    };

  }());

  exports.PRELOADER = exports.PRELOADER || PRELOADER;

}(jQuery, window));


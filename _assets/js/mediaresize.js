(function($, exports) {

    'use strict';

    var MEDIARESIZE = (function() {

        var mediaAspect = mediaAspect || 16/9;
        var windowW = $(window).width();
        var windowH = $(window).height();
        var windowAspect = windowW/windowH;

        var $el =  $('.fullscreen-bg');

        function init() {
            _resize();
            $(window).on('resize', function (argument) {
                _resize();
            })
        }

        function _resize() {

            windowW = $(window).width();
            windowH = $(window).height();
            windowAspect = windowW/windowH;

            if (windowAspect < mediaAspect) {
                $el.css({
                    width: windowH*mediaAspect,
                    height: windowH,
                    top: 0,
                    left: -(windowH*mediaAspect-windowW)/2
                });
            } else {
                $el.css({
                    width: windowW,
                    height: windowW/mediaAspect,
                    top: -(windowW/mediaAspect-windowH)/2,
                    left: 0
                });
            }
        }

        return {
            init: init
        };
    }());

    exports.MEDIARESIZE = exports.MEDIARESIZE || MEDIARESIZE;

}(jQuery, window));
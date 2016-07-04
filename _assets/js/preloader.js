(function(exports) {

    var PRELOADER = (function() {

        var $preloader = $('.preloader'),
            $boxCircle = $('.box-circle'),
            $boxMainMessage = $('.box-main-message');

        function _removePreloader(callback) {
            setTimeout(function () {

                $preloader.addClass('is-loaded')

                setTimeout(function(){
                    $preloader.addClass('is-end')
                    $boxCircle.addClass('is-loaded')
                }, 200)

                setTimeout(function(){
                    $boxMainMessage.addClass('is-loaded');
                }, 600)

            }, 0);
        }

        function init() {
            _removePreloader();
        }

        return {
            init: init,
            remove: _removePreloader
        };

    }());

    exports.PRELOADER = exports.PRELOADER || PRELOADER;

}(window));
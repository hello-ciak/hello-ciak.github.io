(function($, exports) {

    setTimeout(function () {
        PRELOADER.show()
    }, 0)

    $(window).on('load', function(){
        setTimeout(function() {
            PRELOADER.remove()
            //$('.chrome').addClass('loaded')
            if (!Modernizr.touchevents){
                setTimeout(function() {
                    $('.fullscreen-bg').append('<iframe class="fullscreen-bg__video" width="1280" height="720" src="https://www.youtube.com/embed/GquEnoqZAK0?rel=0&amp;controls=0&amp;showinfo=0&amp;autoplay=1&amp;loop=1" frameborder="0" allowfullscreen></iframe>')
                    MEDIARESIZE.init();
                }, 500)
            }
        }, 0)
    })

}(jQuery, window));
(function(exports) {

    'use strict';

    var MAIN = (function() {

        var days = {
            1: 'I hate Monday here in the mighty jungle, I think I’m gonna sleep tonight... in furrrront of a good movie. Any suggestions?',
            2: 'It’s only Tuesday?! I feel like a caged lion. What about looking furrrr the nearrrrest theaterrrr to retreat to?',
            3: 'Wednesday, the week is half over and theaterrrrs are full of grrrreat movies rrrready to be seen. Wait for me! The beast is yet to come.',
            4: 'It’s Thirstday!<br>Let’s find out some furrrresh movies<br>to cool this jungle off.',
            5: '_Upcoming weekend means upcoming movies! ROAAARRR with me, it’s Furrrriday!',
            6: 'A movie without starrrrs is like a savannah without me. Saturrrrday is the purrrrfect day for a blockbusterrrr.',
            7: 'This morning in Africa, a gazelle woke up. Sadly, it doesn’t know I love spend my Sunday watching movies, so it runs furrrr nothing.'
        }

        function _renderDay() {
            var d = new Date(),
                n = d.getDay();
            $('.day-text').append(days[n])
        }

        function _renderTriangle() {
            var $s = $('.cont-canvas');
            var pattern = Trianglify({
                width: $s.innerWidth(),
                height: $s.innerHeight(),
                cell_size: 40
            });
            $s.append(pattern.canvas())
        }

        function _init() {

            _renderDay()
            _renderTriangle()

            $(window).on('resize', function(){
                $('.cont-canvas canvas').remove()
                _renderTriangle()
            })

        }

        return {
            init: _init
        };

    }());

    MAIN.init();

}(window));

(function(root,factory){"use strict";if(typeof define==="function"&&define.amd){define(function(){return factory()})}else if(typeof exports==="object"){module.exports=factory()}else{root.hunt=factory()}})(this,function(){"use strict";var huntedElements=[],viewport=window.innerHeight,THROTTLE_INTERVAL=100;var Hunted=function(element,config){this.element=element;this.visible=false;for(var prop in config){if(config.hasOwnProperty(prop)){this[prop]=config[prop]}}};Hunted.prototype.offset=0;Hunted.prototype.persist=false;Hunted.prototype.in=function(){};Hunted.prototype.out=function(){};var add=function(elements,options){if(elements instanceof Node===false&&typeof elements.length!=="number"||typeof options!=="object"){throw new TypeError("Arguments must be an element or a list of them and an object")}if(elements instanceof Node===true){elements=[elements]}var i=0,len=elements.length;for(;i<len;i++){huntedElements.push(new Hunted(elements[i],options))}huntElements();i=len=null};var updateMetrics=function(){viewport=window.innerHeight;huntElements()};var huntElements=function(){var len=huntedElements.length,hunted,rect;while(len){--len;hunted=huntedElements[len];rect=hunted.element.getBoundingClientRect();if(!hunted.visible&&rect.top-hunted.offset<viewport&&rect.top>=-(rect.height+hunted.offset)){hunted.in.apply(hunted.element);hunted.visible=true}if(hunted.visible&&(rect.top-hunted.offset>=viewport||rect.top<=-(rect.height+hunted.offset))){hunted.out.apply(hunted.element);hunted.visible=false;if(!hunted.persist){huntedElements.splice(len,1)}}}hunted=len=null};var throttle=function(fn){var timer=null;return function(){if(timer){return}timer=setTimeout(function(){fn.apply(this,arguments);timer=null},THROTTLE_INTERVAL)}};window.addEventListener("resize",throttle(updateMetrics));window.addEventListener("scroll",throttle(huntElements));return add});


(function(exports) {

    'use strict';

    var MAIN = (function() {

        var days = {
            1: 'I hate Monday here in the mighty jungle, I think I’m gonna sleep tonight... in furrrront of a good movie.<br>Any suggestions?',
            2: 'It’s only Tuesday?!<br>I feel like a caged lion.<br>What about looking furrrr<br>the nearrrrest theaterrrr to retreat to?',
            3: 'Wednesday, the week is half over and theaterrrrs are full of grrrreat movies rrrready to be seen.<br>Wait for me! The beast is yet to come.',
            4: 'It’s Thirstday!<br>Let’s find out some furrrresh movies<br>to cool this jungle off.',
            5: 'Upcoming weekend means upcoming movies!<br>ROAAARRR with me, it’s Furrrriday!',
            6: 'A movie without starrrrs is like a savannah without me. Saturrrrday is the purrrrfect day for a blockbusterrrr.',
            0: 'This morning in Africa, a gazelle woke up.<br>Sadly, it doesn’t know I love spend my Sunday watching movies, so it runs furrrr nothing.'
        }

        function _renderDay() {
            var d = new Date(),
                n = d.getDay();

            console.log('n', n)
            $('.day-text').append(days[n])
        }

        function _renderTriangle() {
            var $s = $('.cont-canvas');
            var pattern = Trianglify({
                width: $s.innerWidth(),
                height: $s.innerHeight(),
                x_colors: "Spectral",
                cell_size: 40
            });
            $s.append(pattern.canvas())
        }

        function _handler() {
            $(window).on('resize', function(){
                $('.cont-canvas canvas').remove()
                _renderTriangle()
            })

            hunt(document.getElementsByClassName('animate'), {
                in: function() {
                    this.classList.add('is-active');
                },
                persist: true,
                offset: -50
            });

            $(".telegram-me").messengerme();
        }

        function _renderMap() {
            cartodb.createVis('map', 'https://ruggerinicholas.cartodb.com/api/v2/viz/4f0753d6-385f-11e6-af43-0e3a376473ab/viz.json', {
                zoom: 2
            })
            .done(function(vis, layers) {
                // layer 0 is the base layer, layer 1 is cartodb layer
                // when setInteraction is disabled featureOver is triggered
                layers[1].setInteraction(false);

                // you can get the native map to work with it
                var map = vis.getNativeMap();

                // now, perform any operations you need, e.g. assuming map is a L.Map object:
                // map.setZoom(3);
                // map.panTo([50.5, 30.5]);
            })
            .error(function(err) {
                console.log(err);
            });
        }

        function _init() {

            _renderDay()
            _renderTriangle()
            _handler()
            // _renderMap()

        }

        return {
            init: _init
        };

    }());

    MAIN.init();

}(window));

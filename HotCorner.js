/******************************************
 * HotCorner - JQuery plugin to simulate a hot corner like in Gnome3 
 *
 *
 * @author          Miezan
 * @copyright       Copyright (c) 2012 .
 * @license         This plugin is under the dual MIT and GPL licenses.
 * @link            http://www.
 * @docs            http://www.
 * @version         Version 0.1
 *
 ******************************************/
(function( $ ){
 
  $.fn.HotCorner= function( options ) {  
 
    var defaults = {
                top: 0,
                left: 0,
                width: '20px',
                height: '20px'
            };
 
    //call in the default otions
    var options = $.extend(defaults, options);
 
    return this.each(function() {
 
     var BrowserDim = browserDimension();

                var $container = $('#container');
                var $selection = $('<div>').addClass('selection-box');
                var $hotCorner = $('#hotCorner');
                var $toAddInCurtain = $('<div >').addClass('lvl1').append('<a href = "#"> myref </a> <button> CLICKE ME</button>');

                $toAddInCurtain.appendTo($selection);
                $selection.appendTo($container);

                var topP = $hotCorner.css('top');
                var leftP = $hotCorner.css('left');

                /* Clicks handler */
                $selection.click(function () {$(this).fadeOut('100'); });
                $selection.children().click( function (e) { e.stopPropagation();  $selection.fadeOut('slow'); } ); // prevent the click to be fired in the parent also
                
                
                $('button').click(function () {$(this).fadeOut('100').fadeIn('300');});

                $(window).resize( function(){           // on resize- recalcutate the dimension of the browser
                    BrowserDim = browserDimension();
                    });


                $hotCorner.hover(function () { //going in 
                    $selection.css({
                        'top': topP,
                        'left': leftP,
                        'width': 0,
                        'height': 0
                    }).fadeIn('slow').animate({
                        width: ['' + BrowserDim[0] + 'px', 'swing'],
                        height: ['' + BrowserDim[1] + 'px', 'swing'],
                        top: 0,
                        left: 0
                    }, 500, 'linear');



                }, function () { //coming out
                    $selection.css({
                        'top': 0,
                        'left': 0,
                        'width': BrowserDim[0],
                        'height': BrowserDim[1]
                    });
                });


                // from http://www.javascripter.net/faq/browserw.htm
                function browserDimension() {
                    var $docBody = document.body;
                    var $docElement = document.documentElement;
                    var $_window = window;
                    var winW = 630,
                        winH = 460;
                    if($docBody && $docBody.offsetWidth) {
                        winW = $docBody.offsetWidth;
                        winH = $docBody.offsetHeight;
                    }
                    if(document.compatMode == 'CSS1Compat' && $docElement && $docElement.offsetWidth) {
                        winW = $docElement.offsetWidth;
                        winH = $docElement.offsetHeight;
                    }
                    if(window.innerWidth && window.innerHeight) {
                        winW = $_window.innerWidth;
                        winH = $_window.innerHeight;
                    }

                    return [winW, winH];

                }
 
    });
 
  };
})( jQuery );


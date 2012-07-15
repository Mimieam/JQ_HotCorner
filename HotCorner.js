/******************************************
 * HotCorner - JQuery plugin to simulate a hot corner like in Gnome3 
 *
 *
 * @author          Miezan
 * @copyright       Copyright (c) 2012 .
 * @license         This plugin is under the dual MIT and GPL licenses.
 * @link            http://c9.io/mimieam/jquery_training/workspace/test.html
 * @docs            soon
 * @version         Version 0.2
 * @ TODO           Optimizing  -> contextual JQuery...
 ******************************************/
 
 
(function( $ ){
 
  $.fn.HotCorner= function( options ) {  
 
    var defaults = {
                HCtop: 0,
                HCleft: 0,
                HCwidth: '20px',
                HCheight: '20px',
                container:'#HC_container',
                toAddIn : $('<span>'),
                persistentMode : 'off'
            };
 
    //call in the default otions
    var options = $.extend(defaults, options);
 
    return this.each(function() {
 
     var BrowserDim = browserDimension();
                
                var $container = this;// $(options.container);
                var $Curtain = $('<div>').addClass('selection-box'); 
                var $hotCorner = $('#hotCorner');
                
                var $toAddInCurtain = options.toAddIn; 
               
                
                $toAddInCurtain.appendTo($Curtain);
                $Curtain.appendTo($container);
               
                var topP = options.HCtop;
                var leftP = options.HCleft;
                
                $hotCorner.css({'top':topP,'left':leftP , 'width':options.HCwidth, 'height':options.HCheight });  //reposition hc if options are provided;
                
                /* Clicks handler */
                $Curtain.click(function () {$(this).fadeOut('100'); });
                $Curtain.children().click( function (e) { e.stopPropagation(); if (options.persistentMode=='off') $Curtain.fadeOut('slow'); } ); // prevent the click to be fired in the parent also
                
                
                $('button').click(function () {$(this).fadeOut('100').fadeIn('300');});

                $(window).resize( function(){           // on resize- recalcutate the dimension of the browser
                    BrowserDim = browserDimension();
                    });


                $hotCorner.hover(function () { //going in 
                    $Curtain.css({
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
                    $Curtain.css({
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


/*
 * HC _ Bookmarklet - V 0.1 
 * Author : Mimi
 * License : free to use 
 *
 * Credit :Template  Originally written by: Brett Barros and modified by: Paul Irish
 *           Copyright (c) 2010 Latent Motion (http://latentmotion.com/how-to-create-a-jquery-bookmarklet/)
 *
 */
 
window.bookmarklet = function (opts) {fullFunc(opts)};

// These are the styles, scripts and callbacks we include in our bookmarklet:
window.bookmarklet({

    css: ['http://c9.io/mimieam/jquery_training/workspace/HotCorner.css', 'http://c9.io/mimieam/jquery_training/workspace/test.css'],
    js: ['http://c9.io/mimieam/jquery_training/workspace/HotCorner.js'],
    //    jqpath : 'myCustomjQueryPath.js', <-- option to include your own path to jquery
    ready: function () {

        alert('HC loaded');


        var GoingIn3 = $('<div >').addClass('lvl1').append('<h3>Things you can do with it :</h3>  \
                    <ul> \
                      <li>Display some information </li>\
                      <li>Google map</li>\
                      <li>Improve your reading speed with the speed reader </li>\
                      <li>quickly hide a page you where watching ( by embeding another page in the curtain - ideal when in full screen) </li>\
                    </ul>');
        var GoesInCurtain = $('<div>');

        GoingIn3.appendTo(GoesInCurtain);

        var HC_div = document.createElement("div");
        HC_div.id = "hotCorner";
        document.body.appendChild(HC_div);

        var options = {
            'HCtop': '0px',
            'HCleft': '0px',

            'toAddIn': GoesInCurtain,
            'container': 'body',
            'persistentMode': 'on'
        };

        $('body').HotCorner(options); 

    }
})
 
function fullFunc(a){function d(b){if(b.length===0){a.ready();return false}$.getScript(b[0],function(){d(b.slice(1))})}function e(b){$.each(b,function(c,f){$("<link>").attr({href:f,rel:"stylesheet"}).appendTo("head")})}a.jqpath=a.jqpath||"http://ajax.googleapis.com/ajax/libs/jquery/1.4.2/jquery.min.js";(function(b){var c=document.createElement("script");c.type="text/javascript";c.src=b;c.onload=function(){e(a.css);d(a.js)};document.body.appendChild(c)})(a.jqpath)};
// RetriveSelectedTxt () & selectedTxt are defined in speedReader.js


 function loadCurtain() {
     // UI - speed Reader  
     var GoingIn4 = $('<div>').addClass('lvl2').append(' \
                    <textarea id = "inputBox" rows="10" cols="120" > </textarea> <br/>\
						<input type="button" value="start Reading" onclick="SR_init()" /> </input>\
						<input type="button" value="stop Reading" onclick="SR_clear()" /> </input>\
                        <input type="button" value="Pause" onclick="SR_paused()" /> </input>\
					  <hr/>\
					</div>\
					<div id="countdown_text" style=" left:330px; top:400px; margin:20px; height:60px; padding:17px; \
						overflow:hidden; border:2px #f32323 dotted ; background: #222222 ;color:#777; " >  </div>');
     
     var GoesInCurtain = $('<div>');
    
    GoingIn4.appendTo(GoesInCurtain);

     var options = {
         'HCtop': '0px',
         'HCleft': '0px',
         'toAddIn': GoesInCurtain,
         'container': '#HC_container',
         'persistentMode': 'on'
     };
     
       $('#hotCorner').hover(function () {
         var selectedTxt = RetriveSelectedTxt();  
         console.log("inhover : " + selectedTxt);
         if (selectedTxt !== "") $('textarea#inputBox').val(selectedTxt);
     },

     function () {
         console.log("Outhover : " + selectedTxt);
         if (selectedTxt !== "") $('textarea#inputBox').val(selectedTxt);
         $('.countdown_text').css({
             "background": "#122"
         });
     });
     
     $('div#HC_container').HotCorner(options);
   
 }
 
      //var GoingIn1 = $('<iframe>').attr({"width": "500px","height": "700px","src": "http://www.microsoft.com"});
     // var GoingIn2 = $('<iframe>').attr({"width": "300px","height": "300px","src": "http://www.Echimane.com" });
     // var GoingIn3 = $('<div >').addClass('lvl1').append('<a href = "#"> myref </a> <button> CLICKE ME</button>');
     //GoesIn1.appendTo(GoesInCurtain);
     //GoingIn3.appendTo(GoesInCurtain);
     //GoingIn2.appendTo(GoesInCurtain);
 
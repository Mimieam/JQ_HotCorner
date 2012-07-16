 
 var selectedTxt = "No Selection was made (that's why u see me ... select a text on the main page and go back on HC - thank you)";
 var index, MAX, str, Arr, pause_index, speed = 200, togglePause = 0,
 inputStr = document.getElementById('inputBox'),
 outputBox = document.getElementById('countdown_text');

 
 
 // a nice function that made my life a little easier - found at http://motyar.blogspot.com/2010/02/get-user-selected-text-with-jquery-and.html
 function getSelected() {
     if (window.getSelection) {
         return window.getSelection();
     }
     else if (document.getSelection) {
         return document.getSelection();
     }
     else {
         var selection = document.selection && document.selection.createRange();
         if (selection.text) {
             return selection.text;
         }
         return false;
     }
     return false;
 }
 
 function SR_init() { //spead Reading
     str = document.getElementById('inputBox').value;
     Arr = str.split(" ");
     MAX = Arr.length;
     index = 0;
     startReading();
 }

 function startReading() {
     if (index < MAX) {
         document.getElementById('countdown_text').innerHTML = Arr[index];
         index++;
         if (index > 0) {
                 setTimeout('startReading()', speed);
         }
     }
 }

 function SR_clear() {
     clearTimeout(index);
     index = MAX;
 }
 
 function SR_paused() {
     if (togglePause == 0) {
        
         pause_index = index;
         index = MAX;
         togglePause = 1;
     }
     else{
        
         index = pause_index;
         togglePause = 0;
          startReading();
           console.log("index = " + index + " max =" + MAX);
     }
 }

 function RetriveSelectedTxt() {
     var selection = getSelected();
     console.log("mouseup : " + selectedTxt);
     if (selection && (selection = new String(selection).replace(/^\s+|\s+$/g, ''))) {
         var temp = $('<span>').html(selection);
         selectedTxt = temp.text();
     }
     return selectedTxt;
 }


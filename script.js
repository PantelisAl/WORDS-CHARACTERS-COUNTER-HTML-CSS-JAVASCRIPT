;(function () {
    'use strict';

    var input = document.querySelector('#words');
    var characters = document.querySelector('#character-count');
    var words = document.querySelector('#word-count');
    
    var wordCount = function (str) { 
        str = str.replace( /  +/g, ' ' );
        return str.split(" ").length;
     }
  
      var count = function (event) {
  
        if (event.target.matches('#words')) {
            characters.innerHTML = input.value.replace(new RegExp(' ', 'g'), '').length;
            words.innerHTML = wordCount(input.value);
          };
      };
  
      document.documentElement.addEventListener('input', count, false);
  })();
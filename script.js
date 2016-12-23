'use strict';
(() => {
  let loc1 = document.querySelector('.loc1');
  let loc2 = document.querySelector('.loc2');
  let loc3 = document.querySelector('.loc3');
  let char = document.querySelector('.char');


  loc1.addEventListener('click', () => {
    char.className = "char char-loc1"
  })
  loc2.addEventListener('click', () => {
    char.className = "char char-loc2"
  })
  loc3.addEventListener('click', () => {
    char.className = "char char-loc3"
  })
  document.querySelector('#start-tour').addEventListener('click', () => {
    char.className = "char char-animation"
  })

})();

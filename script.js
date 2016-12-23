'use strict';
(() => {
  let char = document.querySelector('.char');
  let loc1Title = document.querySelectorAll('h4')[0];
  let loc2Title = document.querySelectorAll('h4')[1];
  let loc3Title = document.querySelectorAll('h4')[2];

  document.querySelector('.loc1').addEventListener('click', () => {
    char.className = "char char-loc1"
    loc1Title.className = ".show-title"
    wipeTitles([1,2])
  })
  document.querySelector('.loc2').addEventListener('click', () => {
    char.className = "char char-loc2"
    loc2Title.className = ".show-title"
    wipeTitles([0,2])
  })
  document.querySelector('.loc3').addEventListener('click', () => {
    char.className = "char char-loc3"
    loc3Title.className = ".show-title"
    wipeTitles([0,1])
  })
  document.querySelector('#start-tour').addEventListener('click', () => {
    char.className = "char char-animation"
    wipeTitles([0,1,2])
  })

  function wipeTitles(selArr) {
    let hide1 = false
    let hide2 = false
    let hide3 = false
    for (let i = 0; i < selArr.length; i++) {
      if (selArr[i] === 0){
        hide1 = true
      }
      if (selArr[i] === 1){
        hide2 = true
      }
      if (selArr[i] === 2){
        hide3 = true
      }
    }
    if (hide1){
      loc1Title.className = "hide-title"
    }
    if (hide2){
      loc2Title.className = "hide-title"
    }
    if (hide3){
      loc3Title.className = "hide-title"
    }
  }

})();

'use strict';

const h1 = document.querySelector('h1');

function handleOnClick() {
  const clickedClass = 'active';
  if (h1.className === clickedClass) {
    h1.className = '';
  } else {
    h1.className = clickedClass;
  }
}

h1.addEventListener('click', handleOnClick);

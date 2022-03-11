'use strict';

const h1 = document.querySelector('h1');

function handleOnClick() {
  h1.classList.toggle('active');
}

h1.addEventListener('click', handleOnClick);

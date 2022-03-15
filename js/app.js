'use strict';

const loginForm = document.querySelector('#login-form');
const loginInput = document.querySelector('input');
const greeting = document.querySelector('#greeting');
const HIDDEN_CLASSNAME = 'hidden';
const USERNAME_KEY = 'username';

const onLoginSubmit = (event) => {
  event.preventDefault();
  const username = loginInput.value;
  localStorage.setItem(USERNAME_KEY, username);
  loginForm.classList.add(HIDDEN_CLASSNAME);
  paintGreeting(username);
};

function paintGreeting(username) {
  greeting.innerText = `hello ${username}`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUserName = localStorage.getItem(USERNAME_KEY);

if (savedUserName === null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener('submit', onLoginSubmit);
} else {
  paintGreeting(savedUserName);
}

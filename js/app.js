'use strict';

const colors = ['#1abc9c', '#3498db', '#9b59b6', '#f39c12', '#e74c3c'];

const title = document.querySelector('div.hello:first-child h1');
const superEventHandler = {
  handleOnClick: function () {
    title.innerText = 'The mouse is clicked!';
    title.style.color = colors[3];
  },
  handleMouseEnter: function () {
    title.innerText = 'The mouse is here!';
    title.style.color = colors[0];
  },
  handleMouseLeave: function () {
    title.innerText = 'The mouse is gone!';
    title.style.color = colors[1];
  },
  handleResizing: function () {
    title.innerText = 'You just resized';
    title.style.color = colors[2];
  },
  handleContextMenu: function () {
    title.innerText = 'That was right click!';
    title.style.color = colors[4];
  },
};

title.addEventListener('click', superEventHandler.handleOnClick);
title.addEventListener('mouseenter', superEventHandler.handleMouseEnter);
title.addEventListener('mouseleave', superEventHandler.handleMouseLeave);
window.addEventListener('resize', superEventHandler.handleResizing);
window.addEventListener('contextmenu', superEventHandler.handleContextMenu);
// remove event를 할 수 없어 아래는 잘 안 쓰도록 하자
window.contextmenu = superEventHandler.handleContextMenu;

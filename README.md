# momentum-cloning

## Basic Data Types

1. Number : Integer, Float

2. String

## Variable

1. const : immutable

2. let : mutable

3. var : don't use it

```javascript
'use strict';

const a = 5;
const b = 2;
const name = 'jay';

console.log(a + b);
console.log(a - b);
console.log(a / b);
console.log('hello my name is ' + name);
console.log(`hello my name is ${name}`);
```

## Boolean

- 0, -0, null, true, false, NaN, undefined,

## Array

```javascript
'use strict';

const daysOfWeek = ['mon', 'tues', 'wed', 'thurs', 'fri'];

daysOfWeek.push('sat');

console.log(daysOfWeek);
console.log(daysOfWeek[0]);
```

## Object

```javascript
'use strict';

const player = {
  name: 'nico',
  score: 1234,
  handsome: false,
  tall: true,
};

console.log(player);

player.handsome = true;
console.log(player.handsome);
player.lastName = 'sassy';

console.log(player);
```

## Function

```javascript
'use strict';

function sayHello(name) {
  console.log(`hello ${name}`);
}

sayHello('niko');
```

```javascript
const player = {
  name: 'niko',
  // sayHello : function{
  //   console.log(`hello ${name}`)
  // }
  sayHello: (name) => {
    console.log(`hello ${name}`);
  },
};

player.sayHello(player.name);
```

## return

```javascript
'use strict';

const age = 12;

function calculateKrAge(ageOfForeigner) {
  return ageOfForeigner + 2;
}

const korAge = calculateKrAge(age);

console.log(korAge);
```

## Conditional

```javascript
'use strict';

const age = prompt('how old are you');

console.log(typeof parseInt(age));
console.log(parseInt(age));
// true false 로 리턴함
console.log(isNaN(age));
```

```javascript
if (isNaN(age)) {
  console.log('are you fucking kidding me');
} else if (age < 18) {
  console.log('you cannot drink');
} else if (age >= 18 && age < 70) {
  console.log('you can drink');
} else {
  console.log('you are too old');
}
```

## Document Object

```javascript
console.dir(document);
document.title;
```

## HTML in javascript

```javascript
'use strict';

const title = document.getElementById('title');

title.innerText = `<h2>hello</h2>`;
console.log(title.id);
console.log(title.className);
```

`const hello = document.getElementsByClassName('hello');`

> 배열이기 때문에 값을 가져올 수 없음

```javascript
const title = document.querySelector('.hello');

console.log(title);

// querySelector는 element를 css 방식으로 가져올 수 있음
```

## Events

```javascript
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
```

## CSS in javascript

```javascript
'use strict';

const h1 = document.querySelector('h1');

function handleOnClick() {
  const currentColor = h1.style.color;
  let newColor = h1.style.color;
  if (currentColor === 'blue') {
    newColor = 'tomato';
  } else {
    newColor = 'blue';
  }
  h1.style.color = newColor;
}

h1.addEventListener('click', handleOnClick);
```

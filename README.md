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

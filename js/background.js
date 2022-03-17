const images = ['0.jpg', '1.jpg', '2.jpg'];

const randomImg = Math.floor(Math.random() * images.length);
const ChosenImg = images[randomImg];

const backgroundImg = document.createElement('img');

backgroundImg.src = `img/${ChosenImg}`;

document.body.appendChild(backgroundImg);

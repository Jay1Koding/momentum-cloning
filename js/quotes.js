// length 11
const quotes = [
  {
    quote:
      'It is only with the heart that one can see rightly; what is essential is invisible to the eye. ',
    author: 'Antoine de Saint-Exupery',
  },
  {
    quote:
      'You can learn a little from victory, you can learn everything from defeat.',
    author: 'Christopher "Christy" Mathewson',
  },
  {
    quote: 'Never underestimate your own ignorance.',
    author: 'Albert Einstein',
  },
  {
    quote: 'Nothing is more despicable than respect based on fear.',
    author: 'Albert Camus',
  },
  {
    quote:
      'Only the person who has faith in himself is able to be faithful to others.',
    author: 'Erich Fromm',
  },
  {
    quote:
      'If you have great talents, industry will improve them; if you have but moderate abilities, industry will supply their deficiency.',
    author: 'Joshua Reynolds',
  },
  {
    quote:
      'Who controls the past controls the future. Who controls the present controls the past.',
    author: 'George Orwell',
  },
  {
    quote:
      '사람은 부지런하면 생각하고, 생각하면 착한 마음이 일어나는데, 놀면 음탕하고, 음탕하면 착함을 잊으며 착함을 잊으면 악한 마음이 생긴다 ',
    author: '소학',
  },
  {
    quote: '공부하다 죽어라',
    author: '혜암 스님',
  },
  {
    quote:
      'Computers are incredibly fast, accurate, and stupid. Human beings are incredibly slow, inaccurate, and brilliant. Together they are powerful beyond imagination.',
    author: 'Albert Einstein',
  },
  {
    quote:
      'If you can’t explain it simply, you don’t understand it well enough',
    author: 'Albert Einstein',
  },
];

const quote = document.querySelector('#quote span:first-child');
const author = document.querySelector('#quote span:last-child');

const randomIndex = Math.round(Math.random() * quotes.length);
const todaysQuote = quotes[randomIndex];

console.log(todaysQuote.quote);
console.log(todaysQuote.author);

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;

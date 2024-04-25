let count = 0;
const myCounterEl = document.getElementById('myCounter');

const myButtonEl = document.getElementById('myButton');
myButtonEl.addEventListener('click', onButtonClick);

function onButtonClick() {
  count = count + 1;
  myCounterEl.textContent = count;
}

setInterval(sayHello, 1000);

function sayHello() {
  const time = new Date();
  const timeEl = document.getElementById('time');
  timeEl.textContent = time.toLocaleString();
}
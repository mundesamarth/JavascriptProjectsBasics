'use strict';

let secretNumber = Math.trunc(Math.random() * 21);
let count = 20;

let checkButtonFunction = function() {
  let guess = Number(document.querySelector('.guess').value);
  if (!guess) {
    document.querySelector('.message').textContent = ' 🛑 Enter a number';
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = '🎉 Correct Guess';
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
  } else if (guess > secretNumber) {
    if (count > 0) {
      document.querySelector('.message').textContent = ' 📈 Too High';
      count--;
      document.querySelector('.score').textContent = count;
    } else {
      document.querySelector('.message').textContent = '💥 You lost ';
    }
  } else {
    if (count > 0) {
      document.querySelector('.message').textContent = ' 📉Too Low';
      count--;
      document.querySelector('.score').textContent = count;
    } else {
      document.querySelector('.message').textContent = '💥 You lost ';
    }
  }
};

let againFunction = function() {
  count = 20;
  secretNumber = Math.trunc(Math.random() * 21);
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.message').textContent = 'Start guessing..';
  document.querySelector('.score').textContent = score;
};

document.querySelector('.check').addEventListener('click', checkButtonFunction);
document.querySelector('.again').addEventListener('click', againFunction);

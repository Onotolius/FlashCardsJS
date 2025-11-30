import {cards} from './db.js';

const card = document.querySelector('.card__inner');
const cardQuestion = document.querySelector('.card__word-question');
const cardAnswer = document.querySelector('.card__word-answer');
const questionsQty = document.querySelector('.header__info-total');
const currentQuestion = document.getElementById('current__word');
const scoreContainer = document.getElementById('current__score');
const showBtn = document.querySelector('.btn-show');
const knowBtn = document.querySelector('.btn-know');
const unknowBtn = document.querySelector('.btn-unknown');
let currentIndex = 0;
let score = 0;
let totalQty = cards.length;

// logic
function updateScore() {
  scoreContainer.textContent = `${score}`;
}

function updateHeader() {
  questionsQty.textContent = `${totalQty}`;
  currentQuestion.textContent = `${currentIndex + 1}`;
}

function renderCard() {
  card.classList.remove('card--flipped');
  const currentCard = cards[currentIndex];
  cardQuestion.textContent = currentCard.question;
  cardAnswer.textContent = currentCard.answer;
  updateHeader();
}

function finishQuiz() {
  card.classList.remove('card--flipped');
  cardQuestion.innerHTML = `<p>Quiz Done</p>
                            <p>Your Score: ${score}/${totalQty}</p>
  `;
  updateScore();
  knowBtn.disabled = true;
  knowBtn.classList.add('disabled');
  unknowBtn.disabled = true;
  unknowBtn.classList.add('disabled');
  showBtn.disabled = true;
  showBtn.classList.add('disabled');
}

// EventListeners
showBtn.addEventListener('click', function () {
  card.classList.add('card--flipped');
});
knowBtn.addEventListener('click', function () {
  score += 1;
  if (currentIndex === cards.length - 1) {
    finishQuiz();
  } else {
    currentIndex++;
    updateHeader();
    updateScore();
    renderCard();
  }
});
unknowBtn.addEventListener('click', function () {
  if (currentIndex === cards.length - 1) {
    finishQuiz();
  } else {
    currentIndex++;
    updateHeader();
    renderCard();
  }
});
document.addEventListener('DOMContentLoaded', function () {
  renderCard();
});

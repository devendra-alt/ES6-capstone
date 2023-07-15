/**
 * @jest-environment jsdom
 */

import mealCounter from '../src/modules/mealCounter.js';

import meals from '../__mocks__/mealMock.js';

const dom = `
  <nav class="nav-bar">
  </nav>
  <div class="section"></div>
`;

document.body.innerHTML = dom;

const navBar = document.querySelector('.nav-bar');
const navEl = document.createElement('a');
navEl.classList.add('nav-link');
navBar.appendChild(navEl);

const mainSection = document.querySelector('.section');

meals.forEach((meal) => {
  const mealElement = document.createElement('div');
  const imgEl = document.createElement('img');
  const mealTitleEl = document.createElement('h1');
  const likeBtn = document.createElement('img');
  const likeCounter = document.createElement('p');
  const commentBtn = document.createElement('button');
  const reservationBtn = document.createElement('button');

  mealElement.setAttribute('data-mealID', meal.idMeal);
  imgEl.setAttribute('data-mealID', meal.idMeal);
  mealTitleEl.setAttribute('data-mealID', meal.idMeal);
  likeBtn.setAttribute('data-mealID', meal.idMeal);
  likeCounter.setAttribute('data-mealID', meal.idMeal);
  commentBtn.setAttribute('data-mealID', meal.idMeal);

  reservationBtn.setAttribute('data-mealID', meal.idMeal);

  mealTitleEl.innerText = meal.strMeal;

  mealElement.classList.add('meal-item');
  imgEl.classList.add('meal-item-img');
  mealTitleEl.classList.add('meal-item-title');
  likeBtn.classList.add('meal-item-like-btn');

  commentBtn.classList.add('meal-item-comment-btn', 'meal-card-input');
  reservationBtn.classList.add('meal-item-reservation-btn', 'meal-card-input');
  likeCounter.classList.add('meal-item-like-counter');
  mealElement.appendChild(imgEl);
  commentBtn.classList.add('meal-item-comment-btn');
  reservationBtn.classList.add('meal-item-reservation-btn');

  mealElement.appendChild(imgEl);
  mealElement.appendChild(mealTitleEl);
  mealElement.appendChild(likeBtn);
  mealElement.appendChild(likeCounter);
  mealElement.appendChild(commentBtn);
  mealElement.appendChild(reservationBtn);
  mainSection.appendChild(mealElement);
});

describe('should count number of element in landing page', () => {
  it('should have meals', () => {
    expect(mealCounter(mainSection)).toBe(4);
  });
});

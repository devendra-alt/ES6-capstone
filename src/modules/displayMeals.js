import fetchMealsFromApi from './meal_list.js';
import likeImg from '../assets/heart.svg';
import displayLikes from './displayLikes.js';

async function displayMeals(reservation) {
  const meals = await fetchMealsFromApi();
  const mainSection = document.querySelector('.section');

  meals.forEach(async (meal) => {
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

    reservationBtn.addEventListener('click', () => {
      reservation.showReservations(meal.idMeal);
    });

    imgEl.src = new URL(meal.strMealThumb);
    mealTitleEl.innerText = meal.strMeal;
    likeBtn.src = likeImg;
    commentBtn.innerText = 'Comments';
    reservationBtn.innerText = 'Reservations';
    const likesItems = await displayLikes(meal.idMeal);
    likeCounter.innerText = likesItems;
    mealElement.classList.add('meal-item');
    imgEl.classList.add('meal-item-img');
    mealTitleEl.classList.add('meal-item-title');
    likeBtn.classList.add('meal-item-like-btn');
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
}

export default displayMeals;

import MealDb from './mealDB';
import exit from '../assets/exit.svg';

const createMealDetailsListEl = (meal) => {
  const mealDetailsList = document.createElement('ul');
  const mealCategoryEl = document.createElement('li');
  const mealRegionEl = document.createElement('li');
  const mealTag = document.createElement('li');

  mealDetailsList.classList.add('comment-popup-meal-details-list');

  mealCategoryEl.innerText = `Meal Category : ` + meal.strCategory;
  mealRegionEl.innerText = `Meal Region : ` + meal.strArea;
  mealTag.innerText = `Meal Tags : ` + meal.strTags;

  mealDetailsList.appendChild(mealCategoryEl);
  mealDetailsList.appendChild(mealRegionEl);
  mealDetailsList.appendChild(mealTag);

  return mealDetailsList;
};

const renderCommentPopUp = (meal) => {
  const popUpEl = document.createElement('div');
  const mealImage = document.createElement('img');
  const mealTitle = document.createElement('h1');
  const exitBtnEl = document.createElement('img');

  mealImage.src = new URL(meal.strMealThumb);
  exitBtnEl.src = exit;

  exitBtnEl.addEventListener('click', (e) => {
    e.target.parentNode.remove();
  });

  mealTitle.innerText = meal.strMeal;

  popUpEl.setAttribute('data-mealID', meal.idMeal);
  mealImage.setAttribute('data-mealID', meal.idMeal);
  mealTitle.setAttribute('data-mealID', meal.idMeal);

  popUpEl.classList.add('comment-popup');
  mealImage.classList.add('comment-popup-img');
  mealTitle.classList.add('comment-popup-title');
  exitBtnEl.classList.add('comment-popup-exit-btn');

  popUpEl.appendChild(exitBtnEl);
  popUpEl.appendChild(mealImage);
  popUpEl.appendChild(mealTitle);
  popUpEl.appendChild(createMealDetailsListEl(meal));

  document.body.appendChild(popUpEl);
};

const commentPopUp = (id) => {
  const mealContainer = document.querySelector('.section');
  mealContainer.addEventListener('click', async (e) => {
    if (e.target.classList.contains('comment-btn')) {
      const mealDb = new MealDb();
      const meal = await mealDb.lookUpMeal(id);
      console.log(meal);
      renderCommentPopUp(meal);
    }
  });
};

export default commentPopUp;

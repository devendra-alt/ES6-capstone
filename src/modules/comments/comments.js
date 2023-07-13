import exit from '../../assets/exit.svg';
import commentListExtracter from './commentListExtracter.js';
import createNewComment from './createComment.js';

const createCommentsEl = async (meal, involvement) => {
  const commentSectionEl = document.createElement('div');

  commentSectionEl.classList.add('popup-comment-section');

  commentSectionEl.setAttribute('data-comment-section-id', meal.idMeal);

  const commentTitleAndList = await commentListExtracter(
    meal.idMeal,
    involvement,
  );

  commentSectionEl.appendChild(commentTitleAndList[0]);
  commentSectionEl.appendChild(commentTitleAndList[1]);

  return commentSectionEl;
};

const createMealDetailsListEl = (meal) => {
  const mealDetailsList = document.createElement('ul');
  const mealCategoryEl = document.createElement('li');
  const mealRegionEl = document.createElement('li');
  const mealTag = document.createElement('li');

  mealDetailsList.classList.add('comment-popup-meal-details-list');

  mealCategoryEl.innerText = `Meal Category : ${meal.strCategory}`;
  mealRegionEl.innerText = `Meal Region : ${meal.strArea}`;
  mealTag.innerText = `Meal Tags : ${meal.strTags}`;

  mealDetailsList.appendChild(mealCategoryEl);
  mealDetailsList.appendChild(mealRegionEl);
  mealDetailsList.appendChild(mealTag);

  return mealDetailsList;
};
const renderCommentPopUp = async (meal, involvement) => {
  const popUpEl = document.createElement('div');
  const mealImage = document.createElement('img');
  const mealTitle = document.createElement('h1');
  const exitBtnEl = document.createElement('img');

  mealImage.src = new URL(meal.strMealThumb);
  exitBtnEl.src = exit;

  exitBtnEl.addEventListener('click', async (e) => {
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
  popUpEl.appendChild(await createCommentsEl(meal, involvement));
  popUpEl.appendChild(createNewComment(meal));

  document.body.appendChild(popUpEl);
};

export default renderCommentPopUp;

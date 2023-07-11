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

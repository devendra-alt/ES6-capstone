const createNewComment = (meal) => {
  const createCommentSection = document.createElement('form');
  const createCommentFormTitle = document.createElement('h1');
  const commentUserNameEl = document.createElement('input');
  const commentUserInsightsEl = document.createElement('textarea');
  const commentBtnEl = document.createElement('button');

  createCommentSection.classList.add('popup-comment-submit-form');
  createCommentFormTitle.classList.add('popup-comment-submit-form-title');
  commentUserNameEl.classList.add(
    'popup-comment-submit-form-user-name',
    'comment-input',
  );
  commentUserInsightsEl.classList.add(
    'popup-comment-submit-form-insights',
    'comment-input',
  );
  commentBtnEl.classList.add('popup-comment-submit-form-comment-btn');

  createCommentSection.setAttribute('data-mealID', meal.idMeal);
  createCommentFormTitle.setAttribute('data-mealID', meal.idMeal);
  commentUserNameEl.setAttribute('data-mealID', meal.idMeal);
  commentUserInsightsEl.setAttribute('data-mealID', meal.idMeal);
  commentBtnEl.setAttribute('data-mealID', meal.idMeal);

  createCommentFormTitle.innerText = 'Add a comment';
  commentUserNameEl.placeholder = 'Your name';
  commentUserInsightsEl.placeholder = 'Your insights';
  commentBtnEl.innerText = 'Comment';

  commentUserNameEl.name = 'userName';
  commentUserInsightsEl.name = 'insightEl';

  commentUserNameEl.id = `commentUserNameField${meal.idMeal}`;
  commentUserInsightsEl.id = `commentUserInsights${meal.idMeal}`;
  commentBtnEl.type = 'submit';

  createCommentSection.appendChild(createCommentFormTitle);
  createCommentSection.appendChild(commentUserNameEl);
  createCommentSection.appendChild(commentUserInsightsEl);
  createCommentSection.appendChild(commentBtnEl);

  return createCommentSection;
};

export default createNewComment;

import MealDb from '../mealDB.js';
import renderCommentPopUp from './comments.js';

const initCommentPopUp = (involvement) => {
  const mealContainer = document.querySelector('.section');
  mealContainer.addEventListener('click', async (e) => {
    if (e.target.classList.contains('meal-item-comment-btn')) {
      const mealDb = new MealDb();
      console.log(e.target.dataset);
      const meal = await mealDb.lookUpMeal(e.target.dataset.mealid);
      renderCommentPopUp(meal, involvement);
    }
  });
};

export default initCommentPopUp;

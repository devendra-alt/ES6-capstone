import MealDb from '../mealDB.js';
import renderCommentPopUp from './comments.js';

const initCommentPopUp = (id, involvement) => {
  const mealContainer = document.querySelector('.section');
  mealContainer.addEventListener('click', async (e) => {
    if (e.target.classList.contains('comment-btn')) {
      const mealDb = new MealDb();
      const meal = await mealDb.lookUpMeal(id);
      renderCommentPopUp(meal, involvement);
    }
  });
};

export default initCommentPopUp;

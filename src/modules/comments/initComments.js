import MealDb from '../mealDB.js';
import renderCommentPopUp from './render.js';

const initCommentPopUp = (id) => {
  const mealContainer = document.querySelector('.section');
  mealContainer.addEventListener('click', async (e) => {
    if (e.target.classList.contains('comment-btn')) {
      const mealDb = new MealDb();
      const meal = await mealDb.lookUpMeal(id);
      renderCommentPopUp(meal);
    }
  });
};

export default initCommentPopUp;

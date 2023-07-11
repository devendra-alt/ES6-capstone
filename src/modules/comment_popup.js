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

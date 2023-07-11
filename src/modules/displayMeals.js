const displayMeals = async () => {
  const meals = await fetchMealsFromApi();
  const mainSection = document.querySelector('.section');

  meals.forEach((meal) => {
    console.log(meal);
    const mealElement = document.createElement('div');
    mealElement.classList.add('body_img');
    mealElement.innerHTML = `
      <img src="${meal.strMealThumb}" />
      <h4>${meal.strMeal}</h4>
      <div class="interactive-btns">
        <button class="btn">Comments</button>
        <button class="btn">Reservations</button>
      </div>
    `;

    mainSection.appendChild(mealElement);
  });
};

displayMeals();

import './styles/reset.css';
import './styles/style.css';
import './assets/meal_logo.jpg';
import fetchMealsFromApi from './modules/meal_list.js';
import displayMeals from './modules/displayMeals.js';

// When the page loads, fetch meals from the API
window.addEventListener('load', () => {
  fetchMealsFromApi()
    .then((meals) => {
      // Display the list of meals on the page
      meals.forEach((meal) => {
        // Access meal properties like meal.strMeal (title) and meal.strMealThumb (image URL)
        // Use the DOM API or a front-end framework like React, Vue, or Angular to render the meals on the page
      });
    })
    .catch((error) => console.error('Error:', error));
});

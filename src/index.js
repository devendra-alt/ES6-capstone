import './styles/reset.css';
import './styles/style.css';
import './assets/meal_logo.jpg';

import fetchMealsFromApi from './modules/meal_list.js';
import displayMeals from './modules/displayMeals.js';
import initCommentPopUp from './modules/comments/initComments.js';
import initCreateComment from './modules/comments/initCreateComment.js';
import Involvement from './modules/Involvement.js';

const involvement = new Involvement();

initCommentPopUp('52774', involvement);
initCreateComment(involvement);

displayMeals();


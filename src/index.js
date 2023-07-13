import './styles/reset.css';
import './styles/style.css';
import './styles/reservations.css'; import './assets/meal_logo.jpg';
import displayMeals from './modules/displayMeals.js';
import initCommentPopUp from './modules/comments/initComments.js';
import initCreateComment from './modules/comments/initCreateComment.js';
import Involvement from './modules/Involvement.js';
import Reservations from './modules/reservations/reservationsModal/reservations.js';

const involvement = new Involvement();
const reservation = new Reservations();
displayMeals(reservation);
initCommentPopUp(involvement);
initCreateComment(involvement);
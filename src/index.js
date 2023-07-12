import './styles/reset.css';
import './styles/style.css';
import './assets/meal_logo.jpg';
import './styles/reservations.css';

import PullMealData from './reservationsModal/pullMeal.js';

import Reservations from './reservationsModal/reservations.js';
import fetchReservations from './reservationsModal/fetchResev.js';

const reservationsModal = new Reservations();
const getMealData = new PullMealData();
const fetchedReservationData = new fetchReservations();

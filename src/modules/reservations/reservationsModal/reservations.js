import PullMealData from './pullMeal';

import FetchReservations from './fetchReservations.js';export default class Reservations {  async createReservationsModal(index) {
    const getMealsDetails = new PullMealData();
    const mealsDetails = await getMealsDetails.fetchMealsData(index);
    const reservationsSection = document.createElement('section');
    reservationsSection.className = 'reservationsSection';
    reservationsSection.innerHTML = `
    <div class="reservationsContainer">
      <p class="close-icon"><span class="material-symbols-outlined">close</span></p>
      <div class="mealDescription">
        <img class="mealImage" src="${mealsDetails.meals[0].strMealThumb}" width="600" alt="simple">
        <h2 class="mealTitle headings">${mealsDetails.meals[0].strMeal}</h2>      </div>
      <div class="sectionContainers">
        <h2 class="reservationsHeading headings">Reservations(${this.reservationCount}):</h2>
        <div class="existingReservations"> </div>
      </div>
    </div>`;
    document.body.appendChild(reservationsSection);
    const reservationCloseBtns = document.querySelector('.close-icon');
    this.closeReservationModal(reservationCloseBtns);
  }  closeReservationModal(reservationCloseBtns) {
    reservationCloseBtns.addEventListener('click', () => {
      reservationCloseBtns.parentNode.parentNode.remove();
    });
  }  updateCounter(fetchedReservationArr) {
    // Updates counter
    this.reservationCount = fetchedReservationArr.length;
    const reservationsHeading = document.querySelectorAll(
      '.reservationsHeading'
    );
    reservationsHeading.forEach((each) => {
      each.textContent = `Reservations (${this.reservationCount}):`;
    });
  }  async displayReservations(mealId) {
    const fetchReservations = await this.fetchReservationsData();
    const existingReservations = document.querySelectorAll(
      '.existingReservations'
    );    // Clear existing reservations
    existingReservations.forEach((each) => {
      each.innerHTML = '';
    });
    this.updateCounter(fetchedReservationArr);    fetchedReservationArr.forEach((each) => {
      const reservation = document.createElement('p');
      reservation.textContent = `${each.date_start} - ${each.date_end} by ${each.username}`;
      existingReservations.forEach((each) => {
        each.appendChild(reservation);
      });
    });
  }  showReservations(mealId) {
    this.createReservationsModal(mealId);
  }
}
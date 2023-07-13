import PullMealData from './pullMeal.js';

export default class Reservations {
  constructor() {
    this.reservationCount = 0;
    this.mealID = null;
    this.reservationCloseBtns = null;

  }

  async fetchReservationsData() {
    const url = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/EI6t8oJ571YKMWTnlNDB/reservations?item_id=${this.mealID}`;
    try {
      const response = await fetch(url);
      if (!response.ok) {
        return [];
      }
      const result = await response.json();
      return result;
    } catch (error) {
      return [];
    }
  }

  async createReservationsModal(index) {
    this.mealID = index;

    const getMealsDetails = new PullMealData();
    const mealsDetails = await getMealsDetails.fetchMealsData(this.mealID);
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
    this.displayReservations();
    this.reservationCloseBtns = document.querySelector('.close-icon');
    this.closeReservationModal();
  }

  closeReservationModal() {
    this.reservationCloseBtns.addEventListener('click', () => {
      this.reservationCloseBtns.parentNode.parentNode.remove();
    });
  }

  updateCounter(fetchedReservationArr) {
    this.reservationCount = fetchedReservationArr.length;
    const reservationsHeading = document.querySelectorAll(
      '.reservationsHeading',
    );
    reservationsHeading.forEach((each) => {
      each.textContent = `Reservations (${this.reservationCount}):`;
    });
  }

  async displayReservations() {
    const fetchReservations = await this.fetchReservationsData();
    const existingReservations = document.querySelector(
      '.existingReservations',
    );
    existingReservations.innerHTML = '';
    this.updateCounter(fetchReservations);
    fetchReservations.forEach((each) => {
      const reservation = document.createElement('p');
      reservation.classList.add('reservation-list-item');
      reservation.textContent = `${each.date_start} - ${each.date_end} by ${each.username}`;
      existingReservations.appendChild(reservation);
    });
  }

  showReservations(mealId) {
    this.createReservationsModal(mealId);
  }
}

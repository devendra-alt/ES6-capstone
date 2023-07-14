import PostResevation from './postReservation.js';
import PullMealData from './pullMeal.js';
import reservationCounter from './reservationCounter.js';

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
      <di class="sectionContainers">
        <h2 class="reservationsHeading headings">Reservations(${this.reservationCount}):</h2>
        <div class="existingReservations"></div>
        <h2 class="addReservationsHeading headings">Reserve a Spot:</h2>
        <form class="reservationForm">
          <input class="formFields" type="text" placeholder="Username" id="username" name="username">
          <input class="formFields" type="date" placeholder="Start Date" id="startDate" name="startDate">
          <input class="formFields" type="date" placeholder="End Date" id="endDate" name="endDate">
          <input class="submitBtn" type="submit" value="Reserve">
        </form>
      </div>
    </div>`;

    document.body.appendChild(reservationsSection);
    this.displayReservations();
    const postReservationObject = new PostResevation();
    this.reservationBtn = document.querySelector('.submitBtn');

    this.reservationBtn.addEventListener('click', async (e) => {
      e.preventDefault();
      const data = await postReservationObject.setupListener(this.mealID);
      this.displayReservations();
    });

    this.reservationCloseBtns = document.querySelector('.close-icon');
    this.closeReservationModal();
  }

  closeReservationModal() {
    this.reservationCloseBtns.addEventListener('click', () => {
      this.reservationCloseBtns.parentNode.parentNode.remove();
    });
  }

  updateCounter(existingReservations) {
    this.reservationCount = reservationCounter(existingReservations);
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
    fetchReservations.forEach((each) => {
      const reservation = document.createElement('p');
      reservation.classList.add('reservation-list-item');
      reservation.textContent = `${each.date_start} - ${each.date_end} by ${each.username}`;
      existingReservations.appendChild(reservation);
    });
    this.updateCounter(existingReservations);
  }

  showReservations(mealId) {
    this.createReservationsModal(mealId);
  }
}

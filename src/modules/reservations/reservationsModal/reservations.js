import PullMealData from './pullMeal';

export default class Reservations {
  constructor() {
    this.body = document.querySelector('body');
    this.showReservations();
  }

  async fetchReservationsData() {
    const url = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/XTyHQABn3ej42SK28nbc/reservations?item_id=item${this.mealID}`;
    try {
      const response = await fetch(url);
      const result = await response.json();
      return result;
    } catch (error) {
      return [];
    }
  }

  async createReservationsModal(index) {
    const getMealsDetails = new PullMealData();
    const mealsDetails = await getMealsDetails.fetchMealsData(index);
    const reservationsSection = document.createElement('section');
    reservationsSection.className = 'reservationsSection';
    reservationsSection.innerHTML = `
    <div class="reservationsContainer">
      <p class="close-icon"><span class="material-symbols-outlined">close</span></p>
      <div class="mealDescription">
        <img class="mealImage" src="${mealsDetails.meals[0].strMealThumb}" width="600" alt="simple">
        <h2 class="mealTitle headings">${mealsDetails.meals[0].strMeal}</h2>
        <div class="mealsDescription"> ${mealsDetails.meals[0].strInstructions}</div>
      </div>
    </div>`;
    this.body.appendChild(reservationsSection);
    const reservationCloseBtns = document.querySelectorAll('.close-icon');
    this.closeReservationModal(reservationCloseBtns);
  }

  closeReservationModal(reservationCloseBtns) {
    this.reservationsSections = document.querySelectorAll(
      '.meal-item-reservation-btn'
    );
    reservationCloseBtns.forEach((each) => {
      each.addEventListener('click', () => {
        this.reservationsSections.forEach((each) => {
          each.style.display = 'none';
        });
      });
    });
  }

  showReservations(mealId) {
    this.createReservationsModal(mealId);
  }
}

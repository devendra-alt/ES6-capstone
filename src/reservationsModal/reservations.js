import PullMealData from './reservationsModal/pullMeal.js';
import FetchReservations from './reservationsModal/fetchReserv.js';

export default class Reservations {
  constructor() {
    this.body = document.querySelector('body');
    this.viewReservationsBtns = document.getElementsByClassName('viewReservations');
    this.fetchReservations = new FetchReservations();
    this.showReservations();
  }

  async createReservationsModal(index) {
    const getMealsDetails = new PullMealData();
    const mealsDetails = await getMealDetails.fetchMealData();
    const mealsDetailsArr = Array.from(mealsDetails);

    const reservationsSection = document.createElement('section');
    reservationsSection.className = 'reservationsSection';
    reservationsSection.innerHTML = `
    <div class="reservationsContainer">
      <p class="close-icon"><span class="material-symbols-outlined">close</span></p>
      <div class="mealDescription">
        <img class="mealImage" src="${mealsDetailsArr[index].image.medium}" width="600" alt="simple">
        <h2 class="mealTitle headings">${mealsDetailsArr[index].name}</h2>
        <div class="mealsDescription"> ${mealsDetailsArr[index].summary}</div>
      </div>


      
    </div>`;
    this.body.appendChild(reservationsSection);

    const reservationCloseBtns = document.querySelectorAll('.close-icon');
    this.closeReservationModal(reservationCloseBtns);

    
    // postReservationData.setupListener();
  }

  closeReservationModal(reservationCloseBtns) {
    this.reservationsSections = document.querySelectorAll('.reservationsSection');
    reservationCloseBtns.forEach((each) => {
      each.addEventListener('click', () => {
        this.reservationsSections.forEach((each) => {
          each.style.display = 'none';
        });
      });
    });
  }



  async displayReservations(index) {
    const fetchReservations = new FetchReservations();
    fetchReservations.movieID = index;
    const fetchedReservation = await fetchReservations.fetchReservationsData();
    const fetchedReservationArr = Array.from(fetchedReservation);
    const existingReservations = document.querySelectorAll('.existingReservations');

    // Clear existing reservations
    existingReservations.forEach((each) => {
      each.innerHTML = '';
    });
    this.updateCounter(fetchedReservationArr);

    fetchedReservationArr.forEach((each) => {
      const reservation = document.createElement('p');
      reservation.textContent = `${each.date_start} - ${each.date_end} by ${each.username}`;
      existingReservations.forEach((each) => {
        each.appendChild(reservation);
      });
    });
  }

  showReservations() {
    const btnsArray = Array.from(this.viewReservationsBtns);
    btnsArray.forEach((each, eachindex) => {
      each.addEventListener('click', () => {
        this.createReservationsModal(eachindex);
        this.displayReservations(eachindex);
      });
    });
  }
}

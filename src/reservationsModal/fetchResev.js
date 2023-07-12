export default class FetchReservations {
    constructor() {
      this.mealID = 0;
    }
  
    async fetchReservationsData() {
      const url = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/XTyHQABn3ej42SK28nbc/reservations?item_id=item${this.mealID}`;
      try {
        const response = await fetch(url);
        const result = await response.json();
        return result;
      } catch (error) {
        return null;
      }
    }
  }
  
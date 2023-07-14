export default class PostResevation {
  #API_URL;

  constructor() {
    this.form = document.querySelector('.reservationForm');
    this.#API_URL =
      'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/EI6t8oJ571YKMWTnlNDB/reservations';
    this.reservationBtn = document.querySelector('.submitBtn');
    this.username = document.querySelector('#username');
    this.startDate = document.querySelector('#startDate');
    this.endDate = document.querySelector('#endDate');
  }

  async postReservation(itemId, userName, dateStart, dateEnd) {
    try {
      const data = {
        item_id: itemId,
        username: userName,
        date_start: dateStart,
        date_end: dateEnd,
      };

      const response = await fetch(this.#API_URL, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          'Content-type': 'application/json',
        },
      });
      return response;
    } catch (error) {
      return {};
    }
  }

  async setupListener(id) {
    const itemId = id;
    const username = this.username.value;
    const dateStart = this.startDate.value;
    const dateEnd = this.endDate.value;

    const result = await this.postReservation(
      itemId,
      username,
      dateStart,
      dateEnd
    );

    return result;
  }
}

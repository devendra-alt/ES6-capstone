export default class PostResevation {
  constructor() {
    this.reservationBtn = document.querySelector('.submitBtn');
    this.username = document.querySelector('#username');
    this.startDate = document.querySelector('#startDate');
    this.endDate = document.querySelector('#endDate');
    this.itemId = null;
  }

  async postReservation(userName, dateStart, dateEnd) {
    try {
      const data = {
        item_id: this.itemId,
        username: userName,
        date_start: dateStart,
        date_end: dateEnd,
      };

      const response = await fetch(
        'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/EI6t8oJ571YKMWTnlNDB/reservations',
        {
          method: 'POST',
          body: JSON.stringify(data),
          headers: {
            'Content-type': 'application/json',
          },
        },
      );
      return response;
    } catch (error) { return null; }
  }

  async setupListener(id) {
    this.itemid = id;
    const username = this.username.value;
    const dateStart = this.startDate.value;
    const dateEnd = this.endDate.value;
    const result = await this.postReservation(

      username,
      dateStart,
      dateEnd,
    );
    return result;
  }
}

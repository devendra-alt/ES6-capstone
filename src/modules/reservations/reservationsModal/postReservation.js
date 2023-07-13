export default class PostResevation {
  constructor() {
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

      const response = await fetch(
        'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/EI6t8oJ571YKMWTnlNDB/reservations',
        {
          method: 'POST',
          body: JSON.stringify(data),
          headers: {
            'Content-type': 'application/json',
          },
        }
      );
      return response;
    } catch (error) {}
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

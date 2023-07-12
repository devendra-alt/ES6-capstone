class Envolment {
  #APP_ID;

  #BASE_URL;

  constructor() {
    this.#APP_ID = 'EI6t8oJ571YKMWTnlNDB';
    this.#BASE_URL = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${
      this.#APP_ID
    }/`;
  }

  async getComments(mealId) {
    try {
      const res = await fetch(`${this.#BASE_URL}comments?item_id=${mealId}`);
      const data = await res.json();
      if (!res.ok) {
        throw new Error('errror in retriving comments!');
      }
      return data;
    } catch (error) {
      throw new Error('errror in retriving comments!');
    }
  }
}

export default Envolment;

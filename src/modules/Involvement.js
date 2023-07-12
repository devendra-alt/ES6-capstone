class Involvement {
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
      return [];
    }
  }

  async setComment(mealId, userName, comment) {
    try {
      const res = await fetch(`${this.#BASE_URL}comments`, {
        headers: {
          'Content-Type': 'application/json; charset=utf-8',
        },
        method: 'POST',
        body: JSON.stringify({
          item_id: mealId,
          username: userName,
          comment,
        }),
      });
      if (res.ok) {
        return {
          success: true,
          message: 'Comment Saved Successfully',
        };
      }
      return {
        success: false,
        message: 'Error Saving Comment',
      };
    } catch (error) {
      return {
        success: false,
        message: 'Error Saving Comment',
      };
    }
  }
}

export default Involvement;

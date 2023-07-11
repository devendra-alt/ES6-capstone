  async lookUpMeal(id) {
    try {
      const res = await fetch(`${this.#URL}${this.#LOOKUP}${id}`, {
        method: 'GET',
      });
      const data = await res.json();
      return this.extractData(data);
    } catch (error) {
      console.log(error);
    }
  }

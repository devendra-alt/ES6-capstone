class MealDb {
  #URL;
  #LOOKUP;
  constructor() {
    this.#URL = `https://www.themealdb.com/api/json/v1/1/`;
    this.#LOOKUP = `lookup.php?i=`;
  }

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

  extractData = (data) => {
    for (const key in data) {
      if (Object.hasOwnProperty.call(data, key)) {
        return data[key][0];
      }
    }
  };
}

export default MealDb;

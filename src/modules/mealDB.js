class MealDb {
  #URL;

  #LOOKUP;

  constructor() {
    this.#URL = 'https://www.themealdb.com/api/json/v1/1/';
    this.#LOOKUP = 'lookup.php?i=';
  }

  async lookUpMeal(id) {
    try {
      const res = await fetch(`${this.#URL}${this.#LOOKUP}${id}`, {
        method: 'GET',
      });

      if (!res.ok) {
        throw new Error('failed to get meal details');
      }

      const data = await res.json();
      return data.meals[0];
    } catch (error) {
      return {};
    }
  }
}

export default MealDb;

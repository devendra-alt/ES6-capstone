export default class PullMealData {
  constructor() {
    this.url = 'https://www.themealdb.com/api/json/v1/1/lookup.php?';
  }
  
  async fetchMealsData(id) {
    try {
      const response = await fetch(`${this.url}i=${id}`);
      if (!response.ok) {
        throw new Error('Error in fetching data');
      }
      const result = await response.json();
      return result;
    } catch (error) {
      return [];
    }
  }
}

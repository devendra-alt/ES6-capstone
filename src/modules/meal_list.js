const apiURL = 'https://www.themealdb.com/api/json/v1/1/search.php?f=p';

async function fetchMealsFromApi() {
  try {
    const response = await fetch(apiURL);
    if (!response.ok) {
      throw new Error(`HTTP Response Status: ${response.status}`);
    }
    const result = await response.json();
    return result.meals; // Return the array of meals
  } catch (error) {
    console.error('Error fetching meals:', error);
    return []; // Return an empty array if there's an error
  }
}

export default fetchMealsFromApi;

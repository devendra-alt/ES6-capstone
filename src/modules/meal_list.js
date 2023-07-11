
// const apiURL = 'http://www.themealdb.com/api/json/v1/1/search.php?f=a';

// const fetchMealsFromApi = async () => {
//   const response = await fetch(apiURL, {
//     method: 'GET',
  
    
//   });

//   if (!response.ok) {
//     throw new Error(`HTTP Response Status: ${response.status}`);
//   }

//   const result = await response.json();
//   console.log(result);
//   return result.id; // Save and return the game ID
// };

// export default fetchMealsFromApi;



const apiURL = 'http://www.themealdb.com/api/json/v1/1/search.php?f=a';

async function fetchMealsFromApi() {
  try {
    const response = await fetch(apiURL);
    if (!response.ok) {
      throw new Error(`HTTP Response Status: ${response.status}`);
    }
    const result = await response.json();
    console.log(response)
    return result.meals; // Return the array of meals
  } catch (error) {
    console.error('Error fetching meals:', error);
    return []; // Return an empty array if there's an error
  }
}

// Example usage: fetching meals and logging them to the console
fetchMealsFromApi().then((meals) => console.log(meals));

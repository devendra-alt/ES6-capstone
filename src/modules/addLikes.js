import displayMeals from "./displayMeals";

const recordLike = async (mealId) => {
  const response = await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/EI6t8oJ571YKMWTnlNDB/likes', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ item_id: mealId }),
  });

  if (!response.ok) {
    throw new Error(`HTTP Response Status: ${response.status}`);
  }

//   const result = await response.json();
  return true;
};
const initializeLikeButtons = async (mealId) => {
  await recordLike(mealId);
  displayMeals('calling')
};

export default initializeLikeButtons;




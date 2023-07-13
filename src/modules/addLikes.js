import { getLikes } from './displayLikes.js';

const recordLike = async (mealId) => {
  const response = await fetch(
    'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/EI6t8oJ571YKMWTnlNDB/likes',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ item_id: mealId }),
    },
  );

  if (!response.ok) {
    throw new Error(`HTTP Response Status: ${response.status}`);
  }

  //   const result = await response.json();
  return true;
};
const initializeLikeButtons = async (mealId) => {
  await recordLike(mealId);
  const updatedLikes = await getLikes();
  const likeCounterList = document.querySelectorAll('.meal-item-like-counter');
  updatedLikes.forEach((updateObject) => {
    likeCounterList.forEach((counterEl) => {
      if (updateObject.item_id === counterEl.dataset.mealid) {
        counterEl.innerHTML = `${updateObject.likes} likes`;
        const heart = document.querySelector(
          `.meal-item-like-btn[data-mealid="${mealId}"]`,
        );
        heart.src = new URL('https://img.icons8.com/tiny-color/24/like.png');
      }
    });
  });
};
export default initializeLikeButtons;

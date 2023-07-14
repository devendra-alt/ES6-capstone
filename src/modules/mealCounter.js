const mealCounter = () => {
  const mealList = document.querySelector('.section');
  const navLinkEl = document.querySelectorAll('.nav-link');
  console.log(mealList);
  navLinkEl[0].innerHTML = 'Meal Time (' + mealList.childNodes.length + ')';
};

export default mealCounter;

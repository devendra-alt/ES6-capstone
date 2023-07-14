const mealCounter = () => {
  const mealList = document.querySelector('.section');
  const navLinkEl = document.querySelectorAll('.nav-link');
  navLinkEl[0].innerHTML = `Sparkles De'Light (${mealList.childNodes.length})`;
  return mealList.childNodes.length
};

export default mealCounter;

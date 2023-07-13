import commentCounter from './commentCounter.js';

const commentListExtracter = async (mealId, involvement) => {
  const commentSectionTitle = document.createElement('h1');
  const commentDetailsList = document.createElement('ul');

  commentDetailsList.classList.add('popup-comment-details-list');
  commentSectionTitle.setAttribute('data-comment-section-id', mealId);
  commentDetailsList.setAttribute('data-comment-section-id', mealId);

  const commentsData = await involvement.getComments(mealId);

  commentsData.forEach((element) => {
    const listItem = document.createElement('p');
    listItem.classList.add('popup-comments-item');
    listItem.innerText = `${element.creation_date} ${element.username} : ${element.comment}`;
    commentDetailsList.appendChild(listItem);
  });
  commentSectionTitle.innerText = `Comments(${commentCounter(
    commentDetailsList,
  )})`;
  return [commentSectionTitle, commentDetailsList];
};

export default commentListExtracter;

import commentListExtracter from './commentListExtracter.js';

const initCreateComment = (involvement) => {
  document.body.addEventListener('click', async (e) => {
    e.preventDefault();
    if (e.target.classList.contains('popup-comment-submit-form-comment-btn')) {
      const form = document.querySelector('.popup-comment-submit-form');
      const formData = new FormData(form);
      const formProps = Object.fromEntries(formData);
      if (formProps.userName === '' || formProps.insightEl === '') {
        const errorMessage = document.createElement('p');
        errorMessage.innerText = 'Please Provide Valid UserName and Comment';
        form.prepend(errorMessage);
      }
      const res = await involvement.setComment(
        e.target.dataset.mealid,
        formProps.userName,
        formProps.insightEl,
      );
      if (res.success) {
        const commentSectionEl = document.querySelector(
          '.popup-comment-section',
        );
        const commentListData = await commentListExtracter(
          e.target.dataset.mealid,
          involvement,
        );
        commentSectionEl.innerHTML = '';
        commentSectionEl.appendChild(commentListData[0]);
        commentSectionEl.appendChild(commentListData[1]);
      }
    }
  });
};

export default initCreateComment;

const commentCounter = (commentDetailsList) => {
  const commentsList = commentDetailsList.childNodes;
  return commentsList.length;
};

export default commentCounter;

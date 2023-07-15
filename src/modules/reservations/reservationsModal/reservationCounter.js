const reservationCounter = (reservationListEl) => {
  const { childNodes } = reservationListEl;
  return childNodes.length;
};

export default reservationCounter;

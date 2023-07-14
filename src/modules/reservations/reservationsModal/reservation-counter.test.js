import reservationCounter from './reservationCounter';

// Mocking a sample reservation list element for testing
const mockReservationListEl = {
  childNodes: [
    { /* sample child node */ },
    { /* sample child node */ },
    { /* sample child node */ },
  ],
};

describe('reservationCounter', () => {
  it('should return the correct count of child nodes', () => {
    const count = reservationCounter(mockReservationListEl);
    expect(count).toEqual(3);
  });
});

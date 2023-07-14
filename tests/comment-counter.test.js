/**
 * @jest-environment jsdom
 */

import commentCounter from '../src/modules/comments/commentCounter';

const dom = `<ul></ul>`;

const mock_comment_data = [
  {
    comment: 'This is nice!',
    creation_date: '2021-01-10',
    username: 'John',
  },
  {
    comment: 'Great content!',
    creation_date: '2021-02-10',
    username: 'Jane',
  },
];

document.body.innerHTML = dom;

const commentDetailsList = document.querySelector('ul');

describe('should count number of element in comment ', () => {
  mock_comment_data.forEach((element) => {
    const listItem = document.createElement('p');
    listItem.classList.add('popup-comments-item');
    listItem.innerText = `${element.creation_date} ${element.username} : ${element.comment}`;
    commentDetailsList.appendChild(listItem);
  });

  it('should count number of elements in comment list', () => {
    expect(commentCounter(commentDetailsList)).toBe(2);
  });
  it('should count number of elements as zero', () => {
    commentDetailsList.innerHTML = '';
    expect(commentCounter(commentDetailsList)).toBe(0);
  });
});

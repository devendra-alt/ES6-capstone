/**
 * @jest-environment jsdom
 */

import commentCounter from '../src/modules/comments/commentCounter.js';
import comments from '../__mocks__/mock.js';

const dom = '<ul></ul>';

document.body.innerHTML = dom;

const commentDetailsList = document.querySelector('ul');

describe('should count number of element in comment ', () => {
  comments.forEach((element) => {
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

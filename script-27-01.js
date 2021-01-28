'use strict';

const array = [];
const form = document.getElementById('root-form');
const ul = document.getElementById('root-list');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  formSubmitHandler(e.target);
});

document.body.addEventListener('click', (e) => {
  e.stopPropagation();
});

function formSubmitHandler(target) {
  const { email: { value } } = target;
  if (value) {
    array.push(value);
    ul.append(createListElement('li', value));
    target.reset();
  }
}

function createListElement(type, value) { // эти две функции очень похожи
  const li = document.createElement(type);
  li.textContent = value;
  li.style.margin = '5px';
  li.append(createDeleteBtn('button', 'Delete item'));
  return li;
}

function createDeleteBtn(type, value) { // эти две функции очень похожи
  const deleteBtn = document.createElement(type);
  deleteBtn.textContent = value;
  deleteBtn.style.marginLeft = '10px';
  deleteBtn.addEventListener('click', deleteElementEvent);
  return deleteBtn;
}

function deleteElementEvent({ target }) {
  const { parentElement, parentElement: { firstChild: { textContent: value } } } = target;
  array.splice(array.findIndex((e) => e === value), 1);
  ul.removeChild(parentElement);
}
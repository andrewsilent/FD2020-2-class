// const [openBtn, closeBtn] = document.querySelectorAll('.buttons button');
// const clickHandler = ({ target }) => {
//   alert(target.textContent);
// };

// const switchHandler = ({target}) => {
//   if (target.textContent === 'Close') {
//     const tmp = openBtn.textContent;
//     openBtn.textContent = closeBtn.textContent;
//     closeBtn.textContent = tmp;
//   }
// };

// openBtn.addEventListener('click', clickHandler);
// closeBtn.addEventListener('click', clickHandler);

// closeBtn.addEventListener('mouseenter', switchHandler);
// openBtn.addEventListener('mouseenter', switchHandler);

/*
Поменять местами содержимое кнопок
по наведению на кнопку close
*/


const buttons = document.querySelectorAll('#root button');

// const clickHandler = ({ target }) => {
//   target.parentElement.style.cssText = `background-color: ${target.dataset.color}`;
// }

// const clickHandler = ({ target: { dataset: { color } }, target: { parentElement } }) => {
//   parentElement.style.cssText = `background-color: ${color}`;
// }

// buttons.forEach(button => button.addEventListener('click', clickHandler));

const buttonsParent = document.querySelector('#root');

const secondClickHandler = ({ target: { dataset: { color } }, target: { parentElement } }) => {
  parentElement.style.cssText = `background-color: ${color}`;
}
buttonsParent.addEventListener('click', secondClickHandler);
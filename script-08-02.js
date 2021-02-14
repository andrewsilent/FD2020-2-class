// # task 1

// const btn = document.querySelector(".btn");
// btn.addEventListener("click", addSquare);
// const container = document.querySelector(".squares");
// container.addEventListener("click", getColor);

// function addSquare() {
//   const div = document.createElement("div");
//   div.style.cssText = `height: 100px; width: 100px; background-color: ${rgbaColor()}`;
//   container.append(div);
// }

// function rgbaColor() {
//   return `rgba(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255}, 1)`;
// }

// function getColor(event) {
//   if (event.target.parentNode === container) {
//     console.log(event.target.style.backgroundColor);
//   }
// }

// # task 2

const text = document.querySelector(".textContainer");
const list = document.querySelector(".listContainer");
list.addEventListener("click", showTextContent);

function showTextContent(e) {
  if (e.target.parentNode === list) {
      text.textContent = e.target.textContent;
  }
  else {
    text.textContent = e.target.closest('li').textContent;
  }
}

// # task 3


'use strict';

// const button = document.getElementById('button');
// const b1 = document.getElementsByTagName('button');
// const b2 = document.querySelectorAll('button');
// const p = document.querySelector('article p');
// console.log(p);

// document.onmousemove = function (e) {
//   settings.mouseX = e.clientX;
// }

// button.onclick = e => console.log(e);
// p.addEventListener('click', e => console.log(e));

const [btnPrev, btnNext] = document.querySelectorAll('.slider button');
const img = document.querySelector('img');
const slides = ['https://images.freeimages.com/images/large-previews/199/sunflowers-6-1392951.jpg',
'https://images.freeimages.com/images/large-previews/b21/sunflower-1381383.jpg',
'https://images.freeimages.com/images/large-previews/15c/flower-1537182.jpg']

class Slider {
  constructor(slides, currentIndex = 0) {
    this.slides = slides;
    this.currentIndex = currentIndex;
  }
  get currentIndex() {
    return this._currentIndex;
  }
  set currentIndex(v) {
    this._currentIndex = v;
  }
  get currentSlide() {
    return this.slides[this.currentIndex];
  }
  get nextIndex() {
    return (this._currentIndex + 1) % this.slides.length;
  }
  get prevIndex() {
    return (this._currentIndex - 1 + this.slides.length) % this.slides.length;
  }
}

const slider = new Slider(slides);

function updateView(str) {
  str ? slider.currentIndex = slider.nextIndex : slider.currentIndex = slider.prevIndex;
  img.setAttribute('src', slider.currentSlide);
}

btnNext.addEventListener('click', function () {
  updateView(1);
})
btnPrev.addEventListener('click', function () {
  updateView(0);
})
updateView();
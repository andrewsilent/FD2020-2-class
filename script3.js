"use strict";

// const newsPaper = {
//   title: 'NY times',
//   articles: ['news1', 'news2', 'news3'],

//   showArticles() {
//     this.articles
//   }
// }

const sum = (...numbers) => {
  return numbers.reduce((acc, num) => {
    return (acc += num);
  });

  // let result = null;
  // for (let i = 0; i < numbers.length; i++) {
  //   result += numbers[i];
  // }
  // numbers.forEach(function (e) {
  //   result += e;
  // });
  // return result;
};

console.log(sum(1, 2, 3, 4, 5));

const arr1 = [1, 2, 3, 4, 5];
const arr2 = [9, 8, 7, 6, 5];
const arrRes = [...arr1, ...arr2];
console.log(arrRes);



function recursiveFunction(n) {
  if (n > 0) {
    console.log(n);
    recursiveFunction(n - 1);
  }
  return;
}
recursiveFunction(6);



function fuctorial(n) {
  if (n === 1) {
    return 1;
  }
  return fuctorial(n - 1) * n;
}

console.log(fuctorial(4));


function fuctorial2(n) {
  if (n === 1) {
  return 1;
  }
  return fuctorial2(n - 1) * n;
}

console.log(fuctorial2(5));


function par(n) {
  if(n>1) {
    return `(${par(n-1)})`;
  }
  return `()`;
}
console.log(par(2));


function par2(n) {
  if(n===1) {
  return `()`;
  }
  return `(${par2(n-1)})`;
}
console.log(par2(3));

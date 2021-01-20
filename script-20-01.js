'use strict'

// const str1 = 'abacdefg';
// const str2 = 'bed';

// function canCreateString(str1, str2) {
//   let map1 = new Map();
//   let map2 = new Map();
//   for (const char of str1) {
//     map1.has(char)
//       ? map1.set(char, map1.get(char) + 1)
//       : map1.set(char, 1);
//   }
//   for (const char of str2) {
//     map2.has(char)
//       ? map2.set(char, map2.get(char) + 1)
//       : map2.set(char, 1);
//   }
//   for (const char of str2) {
//     if (map1.has(char) && map1.get(char) > 0) {
//       map1.set(char, map1.get(char) - 1)
//     } else {
//       return false;
//     }
//   }
//   return true;
// }

// canCreateString(str1, str2);

// const numArray1 = [1, 2, 3, 4, 5, 3, 4, 5, 6, 78, 9, 0, 7, 5];
// const numArray2 = [111, 222, 333];
// const uniqArray = [...new Set([...numArray1, ...numArray2])];
// console.log(uniqArray);


// const auto = {
//   color: 'red',
//   model: 'toyota',
//   year: 2010,
//   engine: {
//     volume: 1.7,
//     type: 'ICE'
//   }
// }

// const { color: autoColor1 } = auto;
// const { color: color2 } = auto;
// const { color, model, year } = auto; // деструктуризация
// const { engine: { volume }, engine: { type } } = auto;
// const { color, model, ...restOfAuto } = auto;
// const m = getModel(auto);
// function getModel({ model }) {
//   return model;
// }

// const numbers = [1, 2, 3, 4, 5];
// const [n1, , n3, , n5] = numbers;


// const user = {
//   firstName: 'John',
//   lastName: 'Smith'
// }

// function getFullName({ firstName, lastName }) {
//   return `${firstName} ${lastName}`;
// }

// console.log(getFullName(user));
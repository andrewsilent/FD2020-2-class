"use strict";

// /**
//  *
//  * @param {function} howToSay
//  * @param {string} whatToSay
//  */

// function sayHello(howToSay, whatToSay) {
//   howToSay(whatToSay);
// }

//***************/
// function TheArray() {
//   this.length = 0;
//   for (let i = 0; i < arguments.length; i++) {
//     this.push(arguments[i]);
//   }
// }

// function TheArrayPrototype() {
//   this.forEach = function forEach(callback) {
//     for (let i = 0; i < this.length; i++) {
//       callback(this[i], i, this);
//     }
//   };

//   this.some = function some(callback) {
//     for (let i = 0; i < this.length; i++) {
//       if (callback(this[i],i,this)) {
//         return true;
//       }
//     }
//     return false;
//   };

//   this.every = function every(callback) {
//     for (let i = 0; i < this.length; i++) {
//       if (!callback(this[i],i,this)) {
//         return false;
//       }
//     }
//     return true;
//   };
// }

// TheArray.prototype = new TheArrayPrototype();
//***************/

const ADULT_AGE = 18;

function SomeUser(firstName, lastName, age, isMale, isSubscribe = false) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
  this.mail = `${this.lastName}-${new Date().getFullYear() - this.age}@gmail.com`;
  this.isMale = isMale;
  this.isSubscribe = isSubscribe;
  
}

function SomeUserPrototype() {
  this.getFullName = function getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

function isAdult(user) {
  return user.age >= ADULT_AGE;
}

function createUsers(amount = 1) {
  const db = [];
  for (let i = 0; i < amount; i++) {
    const user = new SomeUser(
      `Name${i + 1}`,
      `Surname${i + 1}`,
      Math.ceil(Math.random() * 100),
      Math.random() > 0.5,
      Math.random() > 0.5
    );
    db.push(user);
  }
  return db;
}

SomeUser.prototype = new SomeUserPrototype();

const usersDataBase = createUsers(50);

// 1 способ - формировать fullName на лету

// const fullName = usersDataBase.map(function (user) {
//   return `${user.firstName} ${user.lastName}`;
// });
// console.log('fullName');
// console.table(fullName);


// 2 способ - написать внешнюю функцию getFullName()

// function getFullName(user) {
//   return `${user.firstName} ${user.lastName}`;
// }

// const fullName2 = usersDataBase.map(function(user){
//   return getFullName(user);
// });
// console.log('fullName2');
// console.table(fullName2);


// 3 способ - написать метод getFullName

const fullName3 = usersDataBase.map(function(element) {
  return element.getFullName();
});

console.log('fullName3');
console.table(fullName3);



// const adultUsers = usersDataBase.filter(function (user) {
//   return isAdult(user);
// });

// console.log('adultUsers');
// console.table(adultUsers);

// const adultGirls = usersDataBase.filter(function (user) {
//   return (!(user.age < ADULT_AGE) && !(user.isMale));
// })

// console.log('adultGirls');
// console.table(adultGirls);

// const adultGirlsMail = usersDataBase.map(function (user) {
//   return (!(user.age < ADULT_AGE) && !(user.isMale)) ? user.mail : false;
//   // if (!(user.age < ADULT_AGE) && !(user.isMale)) {
//   //   return user.mail;
//   // }
// }).filter(function(user) {
//   return user.mail;
// })

// console.log('adultGirlsMail');
// console.table(adultGirlsMail);
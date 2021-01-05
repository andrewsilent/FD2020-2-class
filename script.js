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

function SomeUser(firstName, lastName, age, mail, isMale, isSubscribe = false) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
  this.mail = mail;
  this.isMale = isMale;
  this.isSubscribe = isSubscribe;
}

function getFullName() {
  return `${this.firstName} ${this.lastName}`;
}

function isAdult(user) {
  return user.age >= 18;
}

function createUsers(amount = 1) {
  const db = [];
  for (let i = 0; i < amount; i++) {
    const user = new SomeUser(
      `Name${i + 1}`,
      `Surname${i + 1}`,
      Math.ceil(Math.random() * 100),
      `${this.firstName}.${this.lastName}@gmail.com`,
      Math.random() > 0.5,
      Math.random() > 0.5
    );
    db.push(user);
  }
  return db;
}

const usersDataBase = createUsers(50);

// const fullName = usersDataBase.map(function(user){
//   return `${user.firstName} ${user.lastName}`;
// })

// const fullName2 = usersDataBase.map(function(user){
//   return user.getFullName;
// });

// console.log(fullName);
// console.log(fullName2);

const adultUsers = usersDataBase.filter(function (user) {
  return user.age >= 18;
});

const adultUsers2 = usersDataBase.filter(function (user) {
  return isAdult(user);
});

console.log(adultUsers);
console.log(adultUsers2);

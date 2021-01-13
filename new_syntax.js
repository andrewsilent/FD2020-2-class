// class UserClass {
//   constructor(firstName, lastName, age) {
//     this._firstName = firstName;
//     this._lastName = lastName;
//     this._age = age;
//   }

//   set firstName(f) {
//     this._firstName = f;
//   }

//   get firstName() {
//     return this._firstName;
//   }

//   set lastName(l) {
//     this._lastName = l;
//   }

//   get lastName() {
//     return this._lastName;
//   }

//   set age(a) {
//     this._age = a;
//   }

//   get age() {
//     return this._age;
//   }

//   get fullName() {
//     return `${this.firstName} ${this.lastName}`;
//   }

// get isAdult() {
//   return this.age >= 18;
// }

//   static isAdult(element) {
//     return element >= 18;
//   }

//   set fullName([f, l]) {
//     this.firstName = f;
//     this.lastName = l;
//   }
// }

// const user2 = new UserClass("andrew", "silent", 25);

// console.log(user2.fullName);
// console.log(user2.age);
// console.log(user2.isAdult);

// ********************************************

// class Worker {
//   constructor(name, surname, days = 0, rate) {
//     this.name = name;
//     this.surname = surname;
//     this.days = days;
//     this.rate = rate;
//   }

//   getSalary() {
//     return this.days * this.rate;
//   }
// }

// const worker = new Worker("andrew", "silent", 21, 400);
// console.log(worker);
// console.log(worker.getSalary());

// ********************************************

// class Fuel {
//   constructor(volume = 1, density = 0.78, fuelType) {
//     if (typeof +volume !== "number" && !Number.isInteger(+volume)) {
//       throw new TypeError("Wrong volume type, integer number expected");
//     }
//     if (typeof +density !== "number" && !Number.isNaN(+density)) {
//       throw new TypeError("Wrong density type, number expected");
//     }
//     if (typeof fuelType !=="string") {
//       throw new TypeError("Wrong fuelType type, string expected");
//     }

//     this.volume = +volume;
//     this.density = +density;
//     this.fuelType = fuelType;
//   }

//   getWeight() {
//     return this.volume * this.density;
//   }
// }

// class Avto {
//   constructor(model, weight = 1400, maxFuelCapacity = 1, fuel) {
//     this.model = model;
//     this.weight = +weight;
//     this.maxFuelCapacity = +maxFuelCapacity;
//     this.fuel = fuel;
//   }

//   set model(m) {
//     if (typeof m !== "string") {
//       throw TypeError("Wrong model type, string expected");
//     }
//     this._model = m;
//   }

//   get model() {
//     return this._model;
//   }

//   set weight(w) {
//     if (typeof +w !== "number" && !Number.isInteger(+w)) {
//       throw TypeError("Wrong weight type, integer number expected");
//     }
//     this._weight = w;
//   }

//   get weight() {
//     return this._weight
//   }

//   set maxFuelCapacity(m) {
//     if (typeof +m !== "number" && !Number.isInteger(+m)) {
//       throw TypeError("Wrong maxFuelCapacity type, integer number expected");
//     }
//     this._maxFuelCapacity = m;
//   }

//   get maxFuelCapacity() {
//     return this._maxFuelCapacity;
//   }

//   set fuel(f) {
//     if (typeof f !== "object") {
//       throw TypeError("Wrong fuel type, object expected");
//     }
//     this._fuel = f;
//   }

//   get fuel() {
//     return this._fuel;
//   }

//   getFullWeight() {
//     return this.weight + this.maxFuelCapacity * this.fuel.getWeight();
//   }
// }

// const myFuel = new Fuel(1, 0.78, 'gas');

// const ford = new Avto("Ford", "1650", 50, myFuel);
// console.log(ford);
// console.log(ford.getFullWeight());

// ********************************************

class Friend {
  constructor(name, appleAmount, friend = null) {
    if (typeof name !== "string") {
      throw TypeError("Wrong name type, string expected");
    }
    if (typeof +appleAmount !== "number" && !Number.isInteger(+appleAmount)) {
      throw TypeError("Wrong appleAmount type, integer number expected");
    }
    if (typeof friend !== "object") {
      throw TypeError("Wrong friend type, object expected");
    }

    this.name = name;
    this.appleAmount = appleAmount;
    this.friends = [];
  }

  // getApplesCount() {      // Это решение работает для одномерного массива друзей, то есть если у друзей тоже есть друзья - уже не сработает
  //   let result = [];
  //   if (this.friends.length > 0) {
  //     console.log(this.friends.map(element => [element.appleAmount, element.friends.map(element => element.appleAmount)]).flat(2).reduce((a, b) => a + b));
  //     result = this.friends.map(element => element.appleAmount).reduce((a, b) => a + b);
  //   }
  //   return this.appleAmount + result;
  // }

  // getApplesCount() {      // Это решение работает для двумерного массива, учитывая друзей у которых есть друзья
  //   let result = [];
  //   if (this.friends.length > 0) {
  //     result = this.friends.map(element => [element.appleAmount, element.friends.map(element => element.appleAmount)]).flat(2).reduce((a, b) => a + b);
  //   }
  //   return this.appleAmount + result;
  // }

  getApplesCount() {        // А это самое универсальное решение, для любого уровня вложенности
    let result = 0;
    getFriendsAppleCount(this);
    function getFriendsAppleCount(friend) {
      if (friend.friends.length > 0) {
        friend.friends.forEach(e => getFriendsAppleCount(e));
      }
      result += friend.appleAmount;
    }
    return result;
  }


  
  addFriend(friend) {
    return this.friends.push(friend);
  }
}

const piter = new Friend('Piter', 10);
const alex = new Friend('Alex', 20);
const greg = new Friend('Greg', 10);
const wilson = new Friend('Wilson', 10);
const lu = new Friend('Lu', 15);
const andrew = new Friend('Andrew', 15);

andrew.addFriend(piter);
andrew.addFriend(alex);
piter.addFriend(greg);
piter.addFriend(wilson);
greg.addFriend(lu);

console.log(andrew);
console.log(andrew.getApplesCount());

// class User {
//   constructor(userName, email, age, isBanned = false) {
//     this.userName = userName;
//     this.email = email;
//     this.age = age;
//     this._isBanned = isBanned;
//   }

//   set isBanned(value) {
//     this._isBanned = value;
//   }
// }

// class Admin extends User {
//   constructor(userName, email, age, isBanned = false, type = "administrator") {
//     super(userName, email, age, isBanned);
//     this.type = type;
//   }

//   banUser(user) {
//     if (!(user instanceof User)) {
//       throw new Error("You can not ban this user");
//     }
//     user.isBanned = true;
//     return `User ${user.userName} banned`;
//   }

//   unbanUser(user) {
//     if (!(user instanceof User)) {
//       throw new Error("You can not unban this user");
//     }
//     user.isBanned = false;
//     return `User ${user.userName} unbanned`;
//   }
// }

// const user = new User("userName", "userMail@gmail.com", 25);

// const user2 = {
//   userName: "userName",
//   userMail: "userMail@gmail.com",
//   age: 25,
//   isBanned: false,
// };

// const admin = new Admin(
//   "AdminName",
//   "adminMail@gmail.com",
//   30,
//   false,
//   "administrator"
// );





// class Squirrel {
//   constructor(name, age, isMale) {
//     this.name = name;
//     this.age = age;
//     this.isMale = isMale;
//   }
//   eat() {
//     return `${this.name} is eating`;
//   }
//   climb() {
//     return `${this.name} is climbing`;
//   }
// }

// class FlyingSquirel extends Squirrel {
//   constructor(name, age, isMale, maxFlyDistance) {
//     super(name, age, isMale);
//     this.maxFlyDistance = maxFlyDistance;
//   }
//   fly() {
//     let randomDistance = Math.ceil(Math.random() * this.maxFlyDistance);
//     return `${this.name} is flying at ${randomDistance} meters`;
//   }
// }

// const sq1 = new Squirrel("Chip", 2, true);
// const sq2 = new FlyingSquirel("Dale", 3, true, 95);

// class QuinSquirrel extends FlyingSquirel {
//   constructor(
//     name,
//     age,
//     isMale,
//     maxFlyDistance,
//     songs = ["Ave Maria", "Du Hast Mich", "Merry Christmass"]
//   ) {
//     super(name, age, isMale, maxFlyDistance);
//     this.songs = songs;
//   }
//   dance() {
//     return `${this.name} is dancing`;
//   }
//   sing() {
//     return `${this.name} singing${this.songs.map((x) => ' "' + x + '" song')}`;
//   }
// }

// sq3 = new QuinSquirrel("Mu", 2, false, 120);



class Figure {
  constructor(name) {
    this._name = name;
  }
  getArea() {}
}

class Circle extends Figure {
  constructor(name, radius) {
    super(name);
    this.radius = radius;
  }
  getArea() {
    return Math.PI * this.radius * this.radius;
  }
}

let circle = new Circle('circle', 10);
console.log(circle.getArea());
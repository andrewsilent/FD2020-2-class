class RangeValidator {
  constructor(from, to) {
    this._from = from;
    this._to = to;
  }
  set from(v) {
    this._from = v;
  }
  get from() {
    return this._from;
  }
  set to(v) {
    this._to = v;
  }
  get to() {
    return this._to;
  }
  get range() {
    return Array(this._from, this._to);
  }
  validate(n) {
    return (n >= this._from && n <= this._to)
  }
}

const r = new RangeValidator(20, 24);






// const users = [
//   {
//     name: "name surname",
//   },
//   {
//     name: "name2 surname2",
//   },
// ];

// for (const user of users) {
//   console.log(user.name);
// }

// function sum(a, b, ...numbers) {
//   let result = a + b;
//   for (const number of numbers) {
//     result += number;
//   }
//   return result;
// }

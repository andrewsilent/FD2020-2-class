// class Queue {
//   constructor(...args) {
//     this._head = 0;
//     this._tail = 0;
//     for (const item of args) {
//       this.push(item);
//     }
//   }
//   get size() {
//     return this._tail - this._head;
//   }

//   push(value) {
//     this[this._tail++] = value;
//     return this.size;
//   }

//   pop() {
//     const lastItem = this[this._head];
//     delete this[this._head++];

//     return lastItem;
//   }
// }

// const q1 = new Queue(1, 3, 5);
// const q2 = new Queue(2, 4, 6, 8, 9, 10);

// function mergeQueues(queue1, queue2) {
//   let result = new Queue();
//   while (queue1.size || queue2.size) {
//     if (queue1.size) {
//       result.push(queue1.pop());
//     }
//     if (queue2.size) {
//       result.push(queue2.pop());
//     }
//   }
//   return result;
// }

// const q3 = mergeQueues(q1, q2);

const user1 = {
  id: 1,
  name: 'John',
  surname: 'John1',
  age: 18
}

const user2 = {
  id: 2,
  name: 'Jane',
  surname: 'John2',
  age: 18
}

const johnMsg = ['msg1', 'msg2', 'msg3'];
const janeMsg = ['msg4', 'msg5', 'msg6'];

const mapWithAllMessages = new Map();

function addMsgToMap(user, messages) {
  return mapWithAllMessages.set(user.id, messages);
}

addMsgToMap(user1, johnMsg);
addMsgToMap(user2, janeMsg);

function getMsgFromMap(userId) {
  return mapWithAllMessages.get(userId);
}

console.log(getMsgFromMap(1));
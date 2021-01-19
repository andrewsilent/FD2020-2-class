// arr = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25];

// function binarySearch(arr, value) {
//   let start = 0;
//   let end = arr.length - 1;
//   let middle = Math.round(end - start) / 2;
//   while (true) {
//     if (value === arr[middle]) {
//       return middle;
//     }
//     if (value > arr[middle]) {
//       start = middle;
//       middle = Math.ceil((end + start) / 2);
//     }
//     if (value < arr[middle]) {
//       end = middle;
//       middle = Math.floor((end - start) / 2);
//     }
//     if (start == end) {
//       return -1;
//     }
//   }
// }


class Stack {
  constructor(maxSize = 1000, ...args) {
    this._maxSize = maxSize;
    this._size = 0;

    for (const item of args) {
      this.push(item);
    }
  }

  get isEmpty() {
    return this._size === 0;
  }

  get size() {
    return this._size;
  }

  push(value) {
    if (this._size >= this._maxSize) {
      throw new RangeError('Stack overflow');
    }
    this[`_${this._size++}`] = value;
    return this._size;
  }

  pop() {
    if (this.isEmpty) {
      return;
    }
    const lastItem = this[`_${--this._size}`];
    delete this[`_${this._size}`];
    return lastItem;
  }

  pick() {
    if (this.isEmpty) {
      return;
    }

    return this[`_${this._size - 1}`];
  }
}

const checkSequence = (str) => {
  const stack = new Stack();
  for (let i = 0; i < str.length; i++) {
    if ((str[i]) === '(' || (str[i]) === '[' || (str[i]) === '{') {
      stack.push(str[i]);
    }
    if ((str[i]) === ')') {
      if (stack.pop() !== '(') {
        return false;
      }
    }
    if ((str[i]) === ']') {
      if (stack.pop() !== '[') {
        return false;
      }
    }
    if ((str[i]) === '}') {
      if (stack.pop() !== '{') {
        return false;
      }
    }
  }
  return stack.isEmpty;
}
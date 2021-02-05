const object = {
  userName: 'Andrew',
  age: 25,
  status: undefined,
  call() {
    console.log(this.userName);
  }
}

console.log(object);

const data = JSON.stringify(object);

console.log(data);

const testObject = JSON.parse(data);

console.log(testObject);
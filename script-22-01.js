function addNum() {
  let res = 0;
  return function add(m) {
    return res += m;
  }
}

let acc = addNum();
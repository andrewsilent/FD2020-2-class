function goSetInterval() {
  let i = 0;
  setInterval(() => i <= 20 ? console.log(i++) : clearInterval(), 100);
}

function goSetTimeout() {
  for (let i = 0; i <= 20; i++) {
    setTimeout(() => console.log(i), i * 500);
  }
}

function goSetTimeoutRecursive(i = 0) {
  setTimeout(() => console.log(i), i * 500);
  if (i < 20) {
    goSetTimeoutRecursive(i + 1);
  }
}
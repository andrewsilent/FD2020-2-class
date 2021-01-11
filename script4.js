// const arr1 = [1,2,3,4,5,6,7,8];
// const arr2 = [2,3,4,5,6];
// let arr3 = [];
// arr3 = arr1.filter(function(element){
//   if (arr2.indexOf(element) == -1) return element;
// });
// console.log(arr3);

// arr4 = arr1.filter(element => arr2.indexOf(element)==-1);
// console.log(arr4);



function getVowelsCount(str) {
  const letterSet = ["a", "e", "i", "o", "u"];
  let result = 0;
  for (let i = 0; i < str.length; i++) {
    if (letterSet.includes(str[i])) {
      result += 1;
    }
  }
  return result;
}


function getVowelsCount2(str) {
  let result = 0;
  for (let i = 0; i < str.length; i++) {
    if (
      str[i] === "a" ||
      str[i] === "e" ||
      str[i] === "i" ||
      str[i] === "o" ||
      str[i] === "u"
    ) {
      result += 1;
    }
  }
  return result;
}


function getVowelsCount3(str) {
  const letterSet = ["a", "e", "i", "o", "u"];
  return str.split("").filter((element) => letterSet.indexOf(element) !== -1).length;
}

const myString = "My awesome string for this task";

console.log(getVowelsCount(myString));

console.log(getVowelsCount2(myString));

console.log(getVowelsCount3(myString));


// Write a function named `stringRepeater(str, num)` that accepts a string and a number as arguments.
// The function should return a new string consisting of the `str` repeated `num` number of times.

function stringRepeater(str, num) {
  let string = "";
  for (let i = 0; i < str.length; i++) {
    string += str[i];
  }
  return string.repeat(num);
}

console.log(stringRepeater("q", 4)); // 'qqqq'
console.log(stringRepeater("go", 2)); // 'gogo'
console.log(stringRepeater("tac", 3)); // 'tactactac'
//

function stringRepeater(str, num) {
  let string = "";
  for (let i = 0; i <= num; i++) {
    string += str;
  }
  return string;
}
console.log(stringRepeater("q", 4)); // 'qqqq'
console.log(stringRepeater("go", 2)); // 'gogo'
console.log(stringRepeater("tac", 3)); // 'tactactac'

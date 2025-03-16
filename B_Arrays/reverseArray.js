// Write a function `reverseArray` that accepts an array as an argument. The function should return a
// array containing the elements of the original array in reverse order.

function reverseArray(arr) {
  return arr.reverse();
}

// or

function reverseArray(arr) {
  let reverse = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    reverse.push(arr[i]);
  }
  return reverse;
}

// or

function reverseArray(arr) {
  let reverse = [];
  for (let i = 0; i < arr.length; i++) {
    reverse.unshift(arr[i]);
  }
  return reverse;
}

console.log(reverseArray(["zero", "one", "two", "three"])); // ['three', 'two', 'one', 'zero']
console.log(reverseArray([7, 1, 8])); // [8, 1, 7]

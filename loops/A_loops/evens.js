// Write a function `evens(max)` that accepts a max number as an argument. The function should print
// all positive even numbers that are less than the max.

function evens(max) {
  let num = 0;
  for (let i = 0; i <= max; i++) {
    if (max[i] % 2 === 0) {
      num += max[i];
    }
  }
  console.log(num);
}

evens(11);
// prints
//  2
//  4
//  6
//  8
//  10

evens(8);
// prints
//  2
//  4
//  6

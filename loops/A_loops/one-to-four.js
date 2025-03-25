// Write a function `oneToFour` that prints all whole numbers from one to four, inclusive. The function
// takes in no arguments and doesn't need to return any value. It should just print to the terminal.
function oneToFour() {
  let count = 0;
  for (let i = 1; i <= 4; i++) {
    count = i;
    console.log(count);
  }
}

oneToFour();
// prints
//  1
//  2
//  3
//  4

// Write a function named `oddSum(max)` that accepts a max number as an argument. The function should
// return the total sum of all odd numbers from 1 to the max, inclusive.
//
// For example, oddSum(10) should return 25 because 1 + 3 + 5 + 7 + 9 = 25

const oddSum = max => {
  let num = 0;
  for (let i = 1; i <= max; i++) {
    if (i % 2 === 1) {
      num += i;
    }
  }
  return num;
};
console.log(oddSum(10)); // 25
console.log(oddSum(5)); // 9

// Write a function `maximum` that accepts an array of numbers as an argument. The function should
// return the largest number of the array. If the array is empty, then the function should return null.

function maximum(nums) {
  if (nums.length === 0) {
    return null;
  }
  let largest = nums[0];
  for (let i = 1; i < nums.length; i++) {
    if (largest < nums[i]) largest = nums[i];
  }
  return largest;
}

console.log(maximum([5, 6, 3, 7])); // 7
console.log(maximum([17, 15, 19, 11, 2])); // 19
console.log(maximum([])); // null

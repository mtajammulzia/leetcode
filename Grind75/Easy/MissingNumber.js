/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
  const exactSum = (nums.length * (nums.length + 1)) / 2;
  let currentSum = nums.reduce((persistedValue, currentValue) => persistedValue + currentValue, 0);
  console.log(exactSum, currentSum);
  if (currentSum == exactSum) return nums.includes(0) ? nums.length : 0;
  return exactSum - currentSum;
};
// console.log(missingNumber([9, 6, 4, 2, 3, 5, 7, 8, 0, 1]));
console.log(missingNumber([1]));

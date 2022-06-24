/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  const minmumOccurances = Math.ceil(nums.length / 2);
  const numMap = new Map();
  for (const num of nums) {
    if (numMap.has(num)) {
      numMap.set(num, numMap.get(num) + 1);
    } else {
      numMap.set(num, 1);
    }
    if (numMap.get(num) >= minmumOccurances) return num;
  }
};
console.log(majorityElement([3, 2, 3]));

var boyerMooresAlgorithm = function (nums) {
  let result = 0;
  let count = 0;
  for (const num of nums) {
    if (count === 0) result = num;
    if (result == num) count++;
    else count--;
  }
  return result;
};
console.log(boyerMooresAlgorithm([1, 2, 1, 2, 2, 1, 2, 2, 2, 2]));

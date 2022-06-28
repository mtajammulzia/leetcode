/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  let numMap = new Map();
  for (const num of nums) numMap.has(num) ? numMap.delete(num) : numMap.set(num, 1);
  for (let key of numMap.keys()) return key;
};
console.log(singleNumber([4, 1, 2, 1, 2]));

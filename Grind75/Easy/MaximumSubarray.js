// * Maximum Subarray
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  let globalMax = nums[0];
  let localMax = nums[0];
  for (let i = 1; i < nums.length; i++) {
    localMax = localMax + nums[i] > nums[i] ? localMax + nums[i] : nums[i];
    globalMax = localMax > globalMax ? localMax : globalMax;
  }
  return globalMax;
};
// console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));

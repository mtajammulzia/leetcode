// * Binary Search
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  let left = 0;
  let right = nums.length - 1;
  const getMid = (right, left) => Math.floor((left + right) / 2);
  let mid = getMid(right, left);
  while (right >= left) {
    if (nums[mid] === target) {
      return mid;
    } else if (nums[mid] > target) {
      right = mid - 1;
      mid = getMid(right, left);
    } else {
      left = mid + 1;
      mid = getMid(right, left);
    }
  }
  return -1;
};
console.log(search([-1, 0, 3, 5, 9, 12], 9));

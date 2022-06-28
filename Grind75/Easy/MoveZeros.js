/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
// 100ms, better than 87%
var moveZeroes = function (nums) {
  const swapInPlace = (arr, i, j) => {
    const temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  };
  let left = nums.indexOf(0);
  if (left === -1) return;
  for (let right = left + 1; right < nums.length; right++) {
    if (nums[right] !== 0) {
      swapInPlace(nums, left, right);
      left++;
    }
  }
  console.log(nums);
};
moveZeroes([1]);

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
// 108ms better than 78%
var moveZeroes = function (nums) {
  const getNearestNonZeroIndex = (nums, nearestFrom) => {
    for (let i = nearestFrom + 1; i < nums.length; i++) {
      if (nums[i] !== 0) return i;
    }
    return -1;
  };

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
      const nearestNonZero = getNearestNonZeroIndex(nums, i);
      if (nearestNonZero === -1) break;
      nums[i] = nums[nearestNonZero];
      nums.splice(nearestNonZero, 1);
      nums.push(0);
    }
  }
  console.log(nums);
};
moveZeroes([1, 1, 0, 3, 12, 0, 15, 16, 17, 0, 0, 100]);

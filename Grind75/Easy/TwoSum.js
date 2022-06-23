// * Two Sum
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = (nums, target) => {
  const diffMap = new Map();
  for (let i = 0; i < nums.length; i++) {
    const differene = target - nums[i];
    if (diffMap.has(differene)) {
      return [i, diffMap.get(differene)];
    } else {
      diffMap.set(nums[i], i);
    }
  }
};
console.log(twoSum([2, 7, 9, 11], 9));

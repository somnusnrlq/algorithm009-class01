/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
  let max = 0; // 能够走到的数组下标

  for(let i = 0; i < nums.length; i++) {
      if (max < i) return false; // 当前这一步都走不到，后面更走不到了
      max = Math.max(nums[i] + i, max);
  }

  return max >= nums.length - 1
};
 
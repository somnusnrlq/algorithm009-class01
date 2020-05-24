//  移动零
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  let j = 0
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] != 0) [nums[j++], nums[i]] = [nums[i], nums[j]]
  }
}

// 两数之和
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  let map = new Map()
  for (let i = 0; i < nums.length; i++) {
    let dif = target - nums[i]
    if (map.has(dif)) {
      return [map.get(dif), i]
    }
    map.set(nums[i], i)
  }
}

// 爬楼梯
var climbStairs = function (n) {
  if (n < 2) {
    return n
  }
  const dp = []
  dp[1] = 1
  dp[2] = 2
  for (let i = 3; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2]
  }

  return dp[n]
}


/** 接雨水
 * 解题思路：从左到右遍历设当列柱子为水洼洼底 同时更新，当前列左右两边洼滩的最大高度 以当前列为洼底的最大水洼面积为( Min(left_max,right_max) - height[i] ) * 1
 */
let trap = function (height) {
    let len = height.length;
    if (!height || height.length == 0) return 0;
    let sum = 0;
    for (let i = 1; i < len - 1; i++) {
        // 求出当前水槽左边最大的高度
        let left_max = 0;
        for (let j = i - 1; j >= 0; j--) {
            left_max = Math.max(left_max, height[j])
        }
        // 求出当前水槽右边最大的高度
        let right_max = 0;
        for (let k = i + 1; k < len; k++) {
            right_max = Math.max(right_max, height[k])
        }
        // 求出能储水的最大高度
        let min = Math.min(left_max, right_max)
        if (min > height[i]) {
            sum += min - height[i]
        }
    }
    return sum;
};
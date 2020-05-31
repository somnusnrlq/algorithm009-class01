// 350. 两个数组的交集 II.md

/*
 * @lc app=leetcode.cn id=350 lang=javascript
 *
 * [350] 两个数组的交集 II
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 * 排序双指针
将两个数组进行排序，随后用双指针顺序查找相同的元素
时间复杂度O(max(nlogn, mlogm, n+m))，空间复杂度O(1) (n,m分别为两个数组的长度)

这里的nlogn是排序的复杂度
空间复杂度O(1)
 */
var intersect = function(nums1, nums2) {
    let arr = []
    //先将俩个数组排序
    nums1 = nums1.sort((a,b)=>a-b)
    nums2 = nums2.sort((a, b) => a - b)
    let i = 0;
    let j = 0;
    //使用双指针来查找相同元素
    while (i<nums1.length&&j<nums2.length) {
        if(nums1[i]===nums2[j]){
            arr.push(nums1[i])
            i++
            j++
        } else if (nums1[i] < nums2[j]) {
            i++
        } else if (nums1[i] > nums2[j]) {
            j++
        }
    }
    return arr
};
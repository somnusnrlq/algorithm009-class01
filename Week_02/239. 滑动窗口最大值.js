// 239. 滑动窗口最大值

/*
 * @lc app=leetcode.cn id=239 lang=javascript
 *
 * [239] 滑动窗口最大值
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 * 使用一个双端队列存储窗口中值的 索引 ，并且保证双端队列中第一个元素永远是最大值，那么只需要遍历一次 nums，就可以取到每次移动时的最大值。

比较当前元素 i 和双端队列第一个元素（索引值），相差 >= k 时队首出列
依次比较双端队列的队尾与当前元素 i 对应的值，队尾元素值较小时出列，直至不小于当前元素 i 的值时，或者队列为空，这是为了保证当队头出队时，新的队头依旧是最大值
当前元素入队
从第 K 次遍历开始，依次把最大值（双端队列的队头）添加到结果 result 中

时间复杂度O(n)
空间复杂度O(n)
 */
var maxSlidingWindow = function (nums, k) {
    //维护一个双端队列，这个队列的第一个元素永远是最大值
    let deque = []
    let result = []
    for (let i = 0; i < nums.length; i++) {
       //将滑动窗口之外的踢出
       if(i-deque[0]>=k){
           //删除队列头
           deque.shift()
       }
        //依次比较双端队列的队尾与当前元素 i 对应的值，队尾元素值较小时出列，直至不小于当前元素 i 的值时，或者队列为空，这是为了保证当队头出队时，新的队头依旧是最大值
        while (nums[deque[deque.length - 1]] <= nums[i]) {
            deque.pop()
        }
        //当前元素入队
        deque.push(i)
        //从第 K 次遍历开始，依次把最大值（双端队列的队头）添加到结果 result 中
        if(i>=k-1){
            result.push(nums[deque[0]])
        }
    }
    return result
};

// 按照https://leetcode-cn.com/problems/permutations/solution/hui-su-suan-fa-xiang-jie-by-labuladong-2/ 解法模板来解题

// 时间复杂度O(n*n!)

var permute = function(nums) {
    // 返回的结果
    let res = []
    backTrack(nums,[],res)
    return res
    
};
// 路径：记录在 track 中
// 选择列表：nums 中不存在于 track 的那些元素
// 结束条件：nums 中的元素全都在 track 中出现
function backTrack(nums,track,res){
     // 触发结束条件
    if(track.length==nums.length){
      res.push([...track])
        return 
    }
    for (let i = 0; i < nums.length; i++) {
         // 排除不合法的选择
       if(track.includes(nums[i])){
           continue
       }
          // 做选择
       track.push(nums[i])
        // 进入下一层决策树
       backTrack(nums,track,res)
        // 取消选择
        track.pop()
    }
}

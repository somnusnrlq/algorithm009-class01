/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
/* 
贪心策略
思路就是安排可以满足每个小孩同时数值又是尽可能小的数
 */
// 结合双指针 92ms 击败98%
var findContentChildren = function(g, s) {
    let gIndex=0,sIndex=0,res=0;
    let sortG=g.sort((a,b)=>a-b);
    let sortS=s.sort((a,b)=>a-b);
    while(gIndex<g.length&&sIndex<s.length){
        if(s[sIndex]>=g[gIndex]){
            res++;
            gIndex++;
        }
        sIndex++;
    }
    return res
};
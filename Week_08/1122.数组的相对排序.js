//解法一 桶排序
//自己想的解法

////将值放入不同的桶中，然后把剩下的值进行排序

时间复杂度O(n||klogk) k =(n-m) 空间复杂度O(n)

var relativeSortArray = function(arr1, arr2) {
    //不在2中的数据
    let other = []
    //做2中的映射
    let map = {}
    //在2中的数据，进行桶排序
    let inArr = new Array(arr2.length)
    for (let i = 0; i < arr2.length; i++) {
        map[arr2[i]]= i

    }
    //进行桶排序
    for (let i = 0; i < arr1.length; i++) {
        const element = arr1[i];
        if(typeof map[element] != 'undefined'){
            let a = map[element]
            if(inArr[a]){
                inArr[a].push(element)
            }else{
                inArr[a]=[element]
            }
            
        }else{
            other.push(element)
        }
    }
    return [...inArr.flat(),...other.sort((a,b)=>a-b)]
};
//解法二 技术排序
//时间复杂度 O(m+n) 空间复杂度O(n) 其中 n 为数组 arr1 的长度，m为数组 arr2 的长度

var relativeSortArray = function(arr1, arr2) {
    // 用来存放每个数出现的次数
    let arr = new Array(1001).fill(0)
    //结果
    let ans = []
    //遍历arr1，把整个arr1的数的出现次数储存在arr上，arr的下标对应arr1的值，arr的值对应arr1中值出现的次数。
    for (let i = 0; i < arr1.length; i++) {
       
        arr[arr1[i]]++
      
    }
    //
    for (let i = 0; i < arr2.length; i++) {
        const element = arr2[i];
        //如果arr2的值在arr所对应的下标位置出现次数大于0，那么就说明arr中的这个位置存在值。
        while(arr[element]>0){
            ans.push(element)
            arr[element]--
        }
    }
    //如果arr1的值不在arr2中，那么不能就这么结束了，因为题目说了如果不在，剩下的值按照升序排序。
    for (let i = 0; i < arr.length; i++) {
        while (arr[i]>0){
            ans.push(i)
            arr[i]--
        }
        
    }
    return ans
};
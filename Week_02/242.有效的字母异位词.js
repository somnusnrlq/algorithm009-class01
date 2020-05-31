// 242.有效的字母异位词.md

var isAnagram = function(s, t) {
    // 自己想出来的
/**
 * 先遍历一个，称为map
 * 在遍历另一个，去除map里面的值
 * 在判断map里面的值是否都是0，如果是true,否则false
 * 
*/
if(s.length!=t.length){
    return false
}
    let map = {}
    for(let i = 0;i<s.length;i++){     
            if(map[s[i]]){
                map[s[i]]++
            }else {
                map[s[i]] =1
            }
    }
    for(let j = 0;j<t.length;j++){     
        if(map[t[j]]>0){
            map[t[j]]--
        }else{
            return false
        }
    }
    let keys = Object.values(map)
    for(let k of keys){
        if(k){
            return false
        }
    }
    return true
};
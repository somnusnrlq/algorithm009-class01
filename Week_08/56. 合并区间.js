
/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    sort(intervals)
    var index = 0
    //console.log(intervals)
    for(let index = 0; index < intervals.length; index++){
        if(intervals[index]) {
            selfMerge(intervals, index)
        }
    }
    //console.log(intervals)
    var result = Array()
    for(let i = 0; i < intervals.length; i++){
        if(intervals[i]){
            result.push(intervals[i])
        }
    }
    return result
};

function selfMerge(intervals,index) {
    for(let j = index + 1; j < intervals.length; j++){
        if(intervals[j]){
            if(intervals[index][1] >= intervals[j][0]) {
                if(intervals[index][1] < intervals[j][1]){
                    intervals[index][1] = intervals[j][1]
                }
                intervals[j] = undefined
            } else {
                return
            }
        }
    }
}

function sort(intervals) {
    for(let i = 0; i < intervals.length; i++){
        for(let j = 0; j < intervals.length - 1 - i; j++){
            if(compare(intervals[j], intervals[j+1])){
                //console.log('switch',i,j)
                var temp = intervals[j]
                intervals[j] = intervals[j+1]
                intervals[j+1] = temp
            }
        }
    }
}

function compare(a, b) {
    if(a[0] > b[0]) {
        return true
    } else {
        return false
    }
}
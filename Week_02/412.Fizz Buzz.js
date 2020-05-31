// 412.Fizz Buzz.md

var fizzBuzz = function(n) {
    let arr = []
    for(let i=1;i<=n;i++){
       
        if(i%15==0){
            arr.push("FizzBuzz")
        }else if(i%5==0){
            arr.push("Buzz")
        } else if (i % 3==0) {
            arr.push("Fizz")
        }else{
            arr.push(i+"")
        }
    }
    return arr
};

// 2
var fizzBuzz = function(n) {
    return new Array(n).fill(0).map((a, i) => (++i % 3 ? '' : 'Fizz') + (i % 5 ? '' : 'Buzz') || '' + i);
};
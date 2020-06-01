// 1.使用用斐波那契数列的公式
var climbStairs = function(n) {
    const sqrt_5 = Math.sqrt(5);
    const fib_n = Math.pow((1 + sqrt_5) / 2, n + 1) - Math.pow((1 - sqrt_5) / 2,n + 1);
    return Math.round(fib_n / sqrt_5);
};

// 2. 动态规划法  dp[n] = dp[n-1] + dp[n-2]dp[n]=dp[n−1]+dp[n−2]

var climbStairs = function(n) {
    const dp = [];
    dp[0] = 1;
    dp[1] = 1;
    for(let i = 2; i <= n; i++) {
        dp[i] = dp[i - 1] + dp[i - 2];
    }
    return dp[n];
};
 

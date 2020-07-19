/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function (s) {
    let len = s.length;
    var dp = new Array(s.length + 1).fill(0);
    dp[len] = 1;
    for (let i = s.length - 1; i >= 0; i--) {
        if (s[i] == '0') {
            dp[i] = 0;
        } else {
            dp[i] = dp[i + 1];
            if (i < len - 1 && (Number(s[i]) == 1 || (Number(s[i]) == 2 && Number(s[i + 1]) <= 6))) {
                dp[i] += dp[i + 2];
            }
        }
    }
    return s.length == 0 ? 0 : dp[0];
};
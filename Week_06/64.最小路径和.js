var minPathSum = function (grid) {
    /**
     *  1. 分治 分为两路计算，比较最小值
     *  2. 定义状态数组   dp[i][j] 为下标i,j的最小路径和
     *  3. dp方程 dp[i][j] = Math.min(dp[i-1][j], dp[i][j-1]) + grid[i][j]
     */
    let m = grid.length
    let n = grid[0].length
    let dp = grid.slice()
    for (let i = 1; i < n; i++) {
      dp[0][i] = dp[0][i - 1] + grid[0][i]
    }
    for (let i = 1; i < m; i++) {
      dp[i][0] = dp[i - 1][0] + grid[i][0]
    }
    for (let i = 1; i < m; i++) {
      for (let j = 1; j < n; j++) {
        dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1]) + grid[i][j]
      }
    }
    return dp[m-1][n-1]
  };
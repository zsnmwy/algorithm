/**
 * @param {number} n
 * @return {number}
 */
const numSquares = function(n) {

  /**

   x + 完全平方数 = i => x + k*k = i (k=1,2,3...)
   x与i之间差一个完全平方数

   即 dp[x]+1 = dp[i]。

   所以，我们只要
   1. 找到所有与i差一个完全平方数的x
   2. 看这些x的哪个dp[x]最小
   3. 把最小的dp[x]+1 => dp[i]

   */

      // 初始化值
  let dp = new Array(n + 1).fill(Infinity)
  dp[0] = 0

  for (let i = 1; i <= n; i++) {
    for (let j = 1; i >= j * j; j++) {
      // 2. 看这些x的哪个dp[x]最小
      // 3. 把最小的dp[x]+1 => dp[i]
      dp[i] = Math.min(dp[i - j * j] + 1, dp[i])
    }
  }

  return dp[n]
}

/**
 * 给定一个三角形 triangle ，找出自顶向下的最小路径和。
 * 每一步只能移动到下一行中相邻的结点上。相邻的结点 在这里指的是 下标 与 上一层结点下标 相同或者等于 上一层结点下标 + 1 的两个结点。也就是说，如果正位于当前行的下标 i ，那么下一步可以移动到下一行的下标 i 或 i + 1 。
 * @url https://leetcode-cn.com/problems/triangle/
 * @param {number[][]} triangle
 * @return {number}
 */
const minimumTotal = function(triangle) {
  /**
   * 从上向下，因为无法确定后几层的数，所以开始的时候不知道选择那个。
   * 倒序来找，计算底层节点与其上层节点的值，得到局部最小值。
   * 从局部最优解，最后得到全局最优解。
   */

  // 直接取最后一列开始
  const dp = triangle[triangle.length - 1]

  // 从倒数第二列开始迭代
  // 控制第几列
  for (let i = dp.length - 2; i >= 0; i--) {
    // 控制列中的元素
    for (let j = 0; j < triangle[i].length; j++) {
      // 计算底层节点与其上层节点的值，得到局部最小值
      dp[j] = Math.min(dp[j], dp[j + 1]) + triangle[i][j]
    }
  }
  return dp[0]
}

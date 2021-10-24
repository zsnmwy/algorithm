/**
 * 给定一个可包含重复数字的序列 nums ，按任意顺序 返回所有不重复的全排列。
 * @param {number[]} nums
 * @return {number[][]}
 */
const permuteUnique = function(nums) {
  const ans = []
  // 记录数组中元素的位置是否有访问过
  const visited = new Array(nums.length).fill(false)

  const recursion = (index, chosen) => {
    // 当数组长度足够的时候，触发递归边界
    if (index === nums.length) {
      // 符合条件的加入 ans 中
      ans.push(chosen.slice())
      return
    }

    for (let i = 0; i < nums.length; i++) {

      if (
          // 已经访问过的元素，不再处理
          visited[i]
          ||
          // 剪枝
          (i>0 && nums[i] === nums[i - 1] && !visited[i - 1])
      ) continue;

      // 将当前元素推入 chosen
      chosen.push(nums[i])
      visited[i] = true

      // 递归
      recursion(index + 1, chosen)

      // 还原现场
      visited[i] = false
      chosen.pop()
    }

  }
  // 排序
  nums.sort((x, y) => x - y)

  // 递归
  recursion(0, [])

  return ans
}

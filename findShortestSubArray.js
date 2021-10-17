/**
 * @param {number[]} nums
 * @return {number}
 */
const findShortestSubArray = function(nums) {

  if (nums.length === 1) return 1

  // 记录数组的度
  const degree = new Map()

  // 记录元素第一次出现的位置
  const first = new Map()

  // 记录元素最后一次出现的位置
  const end = new Map()

  for (let i = 0; i < nums.length; i++) {
    if (!degree.has(nums[i])) {
      // 元素不存在的时候进行度计数的初始化
      degree.set(nums[i], 1)
      // 记录元素的第一个位置
      first.set(nums[i], i)
    } else {
      // 度计数累加
      let num = degree.get(nums[i])
      degree.set(nums[i], num + 1)
      // 记录元素的最后一个位置
      end.set(nums[i], i)
    }
  }
  // 找到最大的度
  let max = 0
  for (let [key, value] of degree.entries()) {
    max = Math.max(max, degree.get(key))
  }

  // 根据度，找到最小区间
  let min = nums.length // 长度最大的时候等于数组长度
  for (let [key, value] of degree.entries()) {
    // 找到最大的度对应的数
    if (max === degree.get(key)) {
      // 没有记录最后出现的地址的时候，即单个元素的时候。取值为开头的值。
      let endValue = end.get(key) || first.get(key)
      min = Math.min(min,
          endValue - first.get(key) + 1)
    }
  }
  return min
}

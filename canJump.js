/**
 * @param {number[]} nums
 * @return {boolean}
 */
const canJump = function(nums) {

  // 一步步跳

  let reach = 0
  const length = nums.length

  for (let j = 0; (j <= reach) && (reach < length - 1); j++) {
    // 更新最大跳跃距离
    reach = Math.max(reach, j + nums[j])
  }
  // 最大跳跃都跳不到就 FALSE
  return reach >= length - 1
}


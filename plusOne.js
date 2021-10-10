/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
  /**
   * 关键 进位，满十进一
   *
   */

  // 记录是否需要进位
  let carry = false

  // 最后一位 +1
  digits[digits.length - 1] = digits[digits.length - 1] + 1

  // 倒序遍历
  // 第一种情况
  // 最后一位+1后，不等于10，则直接返回 digits

  if (digits[digits.length - 1] < 10) return digits

  // 第二种情况
  // 最后一位+1后，等于10，则先将该位设置为0。并标记需要进位。并在遍历到下一位的之后，+1。反复操作。

  // 第三种情况
  // 案例 9999
  // 在倒序遍历到最后一位的时候，发现还需要进位，则在数组的第一位 加1

  for (let i = digits.length - 1; i >= 0; i--) {
    // 若上一位，加1后需要进位，则在此先 +1
    if (carry) {
      digits[i]++
      carry = false
    }

    // +1 后，超10，进1
    if (digits[i] > 9) {
      carry = true
      digits[i] = 0
    }
  }
  // 最后还需要进位，则在数组的头 +1
  if (carry) digits.unshift(1)
  return digits
}

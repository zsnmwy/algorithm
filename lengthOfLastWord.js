/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLastWord = function(s) {
  // split 分割，过滤纯空格
  const arr = s.split(' ').filter(item => item !== '')
  return arr[arr.length - 1].length
}

/**
 * @param {string} s
 * @return {string}
 */
const toLowerCase = function(s) {
  // 正则搜索，全部替换
  return s.replace(/[A-Z]/g, c => String.fromCharCode(c.charCodeAt() + 32))
}

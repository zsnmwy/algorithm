/**
 * @param {string[]} cpdomains
 * @return {string[]}
 */
const subdomainVisits = function(cpdomains) {

  // 使用map来存储域名信息以及访问次数
  const store = new Map()

  /**
   * 辅助函数 - 存储域名的访问次数到Map中
   * @param {string} domain 域名
   * @param {number} count 访问次数
   */
  function _countDomain(domain = '', count = 0) {
    if (!domain) return

    if (store.has(domain)) {
      let curCount = store.get(domain)
      store.set(domain, curCount + count)
    } else {
      store.set(domain, count)
    }
  }

  // 遍历传入的域名数组
  for (let i = 0; i < cpdomains.length; i++) {
    let curStr = cpdomains[i]
    // 取值
    let count = parseInt(curStr.split(' ')[0])
    let subDomain = curStr.split(' ')[1]

    // 先对直接传入的域名进行计数 case: intel.mail.com
    _countDomain(subDomain, count)

    // 对后续的子域名进行计数 case: mail.com  com
    let subArr = subDomain.split('.')
    for (let j = 0; j < subArr.length; j++) {

      // 数组最后一个域名不用去除
      if (subArr.length !== j) subArr.shift()

      // 对子域名进行计数
      _countDomain(subArr.join('.'), count)
    }
  }

  // 读取Map，构建字符串数组返回
  const result = []
  for (const [key, value] of store.entries()) {
    result.push(value + ' ' + key)
  }
  return result
}

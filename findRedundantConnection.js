/**
 * @param {number[][]} edges
 * @return {number[]}
 */
const findRedundantConnection = function(edges) {
  // 查找某一个端点的代表元素
  function findAncestor(e) {
    while (union[e] !== e) {
      e = union[e]
    }
    return e
  }

  // 先找到n的值，即图中一共有多少个节点
  let n = -Infinity
  edges.forEach(([e1, e2]) => n = Math.max(n, e1, e2))

  // 对并查集的数组进行初始化，每个元素的代表元素都是自己本身。
  let union = new Array(n + 1)
  for (let i = 0; i <= n; i++) {
    union[i] = i
  }

  for (let i = 0; i < edges.length; i++) {
    // 对于每一条边，找到这条边的两个端点所对应的代表元素
    let branch1 = findAncestor(edges[i][0])
    let branch2 = findAncestor(edges[i][1])

    // 如果代表元素相同，则说明出现了环
    if (branch1 === branch2) return edges[i]

    // 否则，令第一个端点的代表元素为第二个端点的代表元素，相当于合并了两个分支
    union[branch1] = union[branch2]
  }
}

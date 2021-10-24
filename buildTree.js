/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} inorder 中序遍历
 * @param {number[]} postorder 后序遍历
 * @return {TreeNode}
 */
const buildTree = function(inorder, postorder) {

  // 后续遍历的特点：最后一个元素是根节点。

  // 中序遍历的特点：根节点的左边是左子树，右边是右子树。

  // 找到根节点，拆分子树

  // 判断临界情况，如果两个参数都为空则节点为 null
  if (!inorder.length || !postorder.length) return null

  // 创建一个根节点开始遍历，后序遍历的最后一个元素是根节点
  const node = new TreeNode(postorder[postorder.length - 1])

  // 在中序遍历中找到这个节点所在的位置，左侧左树，右侧右树
  const index = inorder.indexOf(postorder.pop())

  // 划分 inorder，postorder 数组
  // 左树传入中序遍历 index 左侧的节点，也就是左树的中序遍历结果
  node.left = buildTree(inorder.slice(0, index), postorder.slice(0, index))

  // 同时后序遍历的结果也需要发生改变，因为根节点位置左侧就是左树
  // 所以对应的后序遍历数组中，同样通过 index 来拆分
  node.right = buildTree(inorder.slice(index + 1), postorder.slice(index))

  return node
}

function TreeNode(val, left, right) {
  this.val = (val === undefined ? 0 : val)
  this.left = (left === undefined ? null : left)
  this.right = (right === undefined ? null : right)
}

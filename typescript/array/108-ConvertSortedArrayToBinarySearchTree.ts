/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

function sortedArrayToBST(nums: number[]): TreeNode | null {
  const buildTree = (start: number, end: number): TreeNode | null => {
    if (start > end) return null;

    const mid = Math.floor((start + end) / 2);
    const root = new TreeNode(nums[mid]);

    root.left = buildTree(start, mid - 1);
    root.right = buildTree(mid + 1, end);

    return root;
  };

  return buildTree(0, nums.length - 1); // Start with the entire array
}

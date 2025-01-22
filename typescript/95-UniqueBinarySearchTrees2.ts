function generateTrees(n: number): Array<TreeNode | null> {
  if (n === 0) return [];

  function buildTrees(start: number, end: number): Array<TreeNode | null> {
    const trees: Array<TreeNode | null> = [];

    // Base case: If start > end, return null (empty tree).
    if (start > end) {
      trees.push(null);
      return trees;
    }

    // Iterate through each number in the range as the root node.
    for (let i = start; i <= end; i++) {
      // Recursively build all left subtrees and right subtrees.
      const leftSubtrees = buildTrees(start, i - 1);
      const rightSubtrees = buildTrees(i + 1, end);

      // Combine left and right subtrees with the root `i`.
      for (const left of leftSubtrees) {
        for (const right of rightSubtrees) {
          const root = new TreeNode(i);
          root.left = left;
          root.right = right;
          trees.push(root);
        }
      }
    }
    return trees;
  }

  return buildTrees(1, n);
}

function isSameTree(p: TreeNode | null, q: TreeNode | null): boolean {
    // f both trees are null, they are the same.
    if (!p && !q) return true;
  
    // If one of the trees is null, they are not the same.
    if (!p || !q) return false;
  
    // Check if the values of the current nodes are the same,
    // and recursively check the left and right subtrees.
    return (
      p.val === q.val &&
      isSameTree(p.left, q.left) &&
      isSameTree(p.right, q.right)
    );
  }
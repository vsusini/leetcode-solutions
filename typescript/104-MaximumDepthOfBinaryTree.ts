function maxDepth(root: TreeNode | null): number {
    if (root === null) {
        return 0; // Base case
    }

    // Recursively calculate the maximum depth of left and right subtrees
    const leftDepth = maxDepth(root.left);
    const rightDepth = maxDepth(root.right);

    return Math.max(leftDepth, rightDepth) + 1;
}
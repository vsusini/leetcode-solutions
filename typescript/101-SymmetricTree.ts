function isSymmetric(root: TreeNode | null): boolean {
    const traverse = (left: TreeNode | null, right: TreeNode | null): boolean => {
        // Base case: both subtrees are null, so they are symmetric
        if (left === null && right === null) {
            return true;
        }

        if (left === null || right === null) {
            return false;
        }

        if (left.val !== right.val) {
            return false;
        }

        return traverse(left.left, right.right) && traverse(left.right, right.left);
    };

    return root === null || traverse(root.left, root.right);
};
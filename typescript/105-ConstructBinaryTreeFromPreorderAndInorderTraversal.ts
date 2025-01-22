function buildTree(preorder: number[], inorder: number[]): TreeNode | null {
    if (preorder.length === 0 || inorder.length === 0) {
        return null;
    }

    const rootVal = preorder[0];
    const root = new TreeNode(rootVal);

    const rootIndex = inorder.indexOf(rootVal);

    // The left subtree's inorder is everything before rootIndex
    const leftInorder = inorder.slice(0, rootIndex);
    // The right subtree's inorder is everything after rootIndex
    const rightInorder = inorder.slice(rootIndex + 1);

    // The left subtree's preorder matches the size of leftInorder
    const leftPreorder = preorder.slice(1, 1 + leftInorder.length);
    // The right subtree's preorder starts after the left subtree
    const rightPreorder = preorder.slice(1 + leftInorder.length);

    root.left = buildTree(leftPreorder, leftInorder);
    root.right = buildTree(rightPreorder, rightInorder);

    return root;
};
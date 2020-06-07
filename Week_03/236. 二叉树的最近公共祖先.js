

var lowestCommonAncestor = function(root, p, q) {
    return lastOrder(root, p ,q)
};

function lastOrder(root, p, q) {
    if (!root) {
        return null
    }
    if (root.val === p.val || root.val === q.val) {
        return root
    }
    let left = lastOrder(root.left, p, q)
    let right = lastOrder(root.right, p, q)
    if ( left && right) {
        return root
    }
    if (left) {
        return left
    }
    if (right) {
        return right
    }
    return null
}
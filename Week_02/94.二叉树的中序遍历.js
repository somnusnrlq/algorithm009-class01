// 二叉树的中序遍历

var inorderTraversal = function(root) {
    let res = []
    help(root,res)
    return res
};
function help(root,res){
    if(root!=null){
        if(root.left!=null){
            help(root.left,res)
        }
        res.push(root.val)
        if(root.right!=null){
            help(root.right,res)
        }
    }
}
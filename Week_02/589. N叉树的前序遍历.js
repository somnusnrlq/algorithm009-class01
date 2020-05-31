//  589. N叉树的前序遍历

var preorder = function(root) {
    let res = []
    help(root,res)
    return res
};

function help(root,res){
    if(root!=null){
        res.push(root.val)
        if(root.children!=null){
            for (let index = 0; index < root.children.length; index++) {
                const element = root.children[index];
                help(element,res)
                
            }
        }
    }
}
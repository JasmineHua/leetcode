/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
    if(root){
        if(root===p||root===q) return root;
        var leftlow=lowestCommonAncestor(root.left,p,q);
        var rightlow=lowestCommonAncestor(root.right,p,q);
        if(leftlow&&rightlow) return root;
        return leftlow?leftlow:rightlow;
    }
    
};
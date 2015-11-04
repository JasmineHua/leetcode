/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function(root) {
    var depth=0
    if(root){
        var leftDepth=maxDepth(root.left);
        var rightDepth=maxDepth(root.right);
        depth=leftDepth>=rightDepth?(leftDepth+1):(rightDepth+1);
    }
    return depth;
};
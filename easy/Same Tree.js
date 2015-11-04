/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {
    var flag=true;
    if(p&&q){
            if(p.val===q.val) {
                flag=isSameTree(p.left,q.left)&&isSameTree(p.right,q.right)
            }
            else return false;
    }
    else if(p&&!q||!p&&q) return false;
    return flag;
    
};
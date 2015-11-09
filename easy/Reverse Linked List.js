/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
     if(head===null || head.next===null) return head;  
          
        var node = head;  
        var p = head.next;  
        node.next = null;  
        var q;  
        while(p!==null) {  
            q = p.next;  
            p.next = node;  
            node = p;  
            p = q;  
        }  
        return node;   
    
};
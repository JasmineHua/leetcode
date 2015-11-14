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
var deleteDuplicates = function(head) {
    if(head===null) return head;
    var p=head;
    var q=head.next;
    while(q!==null){
        if(q.val!==p.val){
            p.next=q;
            p=q;
        }
        q=q.next;
    }
    p.next=null;
    return head;
};
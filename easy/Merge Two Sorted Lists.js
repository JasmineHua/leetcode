/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
    var l=new ListNode(0);
    var p=l1,q=l2;
    var w=l;
    while(p!==null&&q!==null){
        if(p.val<q.val){
            l1=l1.next;
            w.next=p;
            p.next=null;
            p=l1;
        }
        else{
            l2=l2.next;
            w.next=q;
            q.next=null;
            q=l2;
        }
        w=w.next;
    }
    if(p===null) w.next=q;
    else w.next=p;
    l=l.next
    return l;
    
};
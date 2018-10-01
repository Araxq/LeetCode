/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
const removeNthFromEnd = function (head, n) {
    let current_node = head;
    let nth_node = head;
    let node_before_nth = head;
    let i = 0;
    while (current_node.next !== null) {
        i++;
        current_node = current_node.next;
        if (i >= n) {
            nth_node = nth_node.next;
            if (i > n) node_before_nth = node_before_nth.next;
        }

    }
    if (node_before_nth === nth_node) return head.next;
    node_before_nth.next = nth_node.next;
    return head;

};
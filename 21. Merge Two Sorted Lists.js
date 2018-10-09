/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
function ListNode(val) {
    this.val = val;
    this.next = null;
}

const mergeTwoLists = function (l1, l2) {
    let new_node;
    if (l1 && l2) {
        if (l1.val < l2.val) {
            new_node = l1;
            l1 = l1.next
        }
        else {
            new_node = l2;
            l2 = l2.next
        }

    } else if (l1) return l1; else return l2;
    let head = new_node;
    while (l1 || l2) {
        if (!l1) {
            new_node.next = l2;
            return head;
        }
        if (!l2) {
            new_node.next = l1;
            return head;
        }
        if (l1.val < l2.val) {
            new_node.next = l1;
            new_node = new_node.next;
            l1 = l1.next;
        } else {
            new_node.next = l2;
            new_node = new_node.next;
            l2 = l2.next;
        }
    }
    return head;
};
let a = new ListNode(1);
a.next = new ListNode(2);
a.next.next = new ListNode(4);
let b = new ListNode(1);
b.next = new ListNode(3);
b.next.next = new ListNode(4);
console.log(mergeTwoLists(a, b));
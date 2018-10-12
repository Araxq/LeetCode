/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
function ListNode(val) {
    this.val = val;
    this.next = null;
}

const mergeKLists = function (lists) {
    let head = null;
    let current_new_node = new ListNode();
    while (lists.length) {
        let min_node = lists[0];
        if (!min_node) {
            lists.splice(0, 1);
            continue;
        }
        let min_node_index = 0;

        for (let i = 1; i < lists.length; i++) {
            if (lists[i] === null) {
                lists.splice(i, 1);
                i--;
                continue;
            }
            if (lists[i].val < min_node.val) {
                min_node = lists[i];
                min_node_index = i;
            }
        }


        current_new_node.next = min_node;
        current_new_node = current_new_node.next;
        lists[min_node_index] = lists[min_node_index].next;
        if (!head) {
            head = current_new_node;
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
lists = [a, b];
console.log(mergeKLists(lists));
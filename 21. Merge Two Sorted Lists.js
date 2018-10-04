function ListNode(data) {
    this.val = data;
    this.next = null;
}

function SinglyList() {
    this.head = null;
}

SinglyList.prototype.add = function (value) {
    const node = new ListNode(value);
    let currentNode = this.head;

    if (!currentNode) {
        this.head = node;

        return node;
    }

    while (currentNode.next) {
        currentNode = currentNode.next;
    }
    currentNode.next = node;
};


const mergeTwoLists = function (l1, l2) {
    let merged_list = new SinglyList();
    while (l1 || l2) {
        if (!l1) {
            merged_list.add(l2.val);
            l2 = l2.next;
            continue;
        }
        if (!l2) {
            merged_list.add(l1.val);
            l1 = l1.next;
            continue;
        }
        if (l1.val < l2.val) {
            merged_list.add(l1.val);
            l1 = l1.next;
        } else {
            merged_list.add(l2.val);
            l2 = l2.next;
        }
    }
    return merged_list.head;
};

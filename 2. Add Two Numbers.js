var addTwoNumbers = function (l1, l2) {
    let sumArray = [];
    let surplus = 0;
    let l1IsFinished = false;
    let l2IsFinished = false;
    do {
        let digit = l1.val + l2.val + surplus;
        surplus = Math.floor(digit / 10);
        digit = digit % 10;
        sumArray.push(digit);
        if (l1.next !== null) {
            l1 = l1.next;
        } else {
            l1.val = 0;
            l1IsFinished = true
        }
        if (l2.next !== null) {
            l2 = l2.next;
        } else {
            l2.val = 0;
            l2IsFinished = true;
        }
    } while (!l1IsFinished || !l2IsFinished || surplus !== 0);
    let firstNode = new ListNode(sumArray[0]);
    let tmp = firstNode;
    for (let i = 1; i < sumArray.length; i++) {
        tmp.next = new ListNode(sumArray[i]);
        tmp = tmp.next;
    }
    return firstNode;
};
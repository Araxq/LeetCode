const isValid = function (s) {
    if (s.length % 2 === 1) return false;
    let brackets_order = [];
    for (let i = 0; s[i]; i++) {
        switch (s[i]) {
            case '(':
                brackets_order.push(1);
                break;
            case ')':
                if (brackets_order.pop() !== 1) return false;
                break;
            case '[':
                brackets_order.push(2);
                break;

            case ']':
                if (brackets_order.pop() !== 2) return false;
                break;

            case '{':
                brackets_order.push(3);
                break;

            case '}':
                if (brackets_order.pop() !== 3) return false;
                break;

        }
    }
    return !brackets_order.length;
};
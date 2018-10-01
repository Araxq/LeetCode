function deleteLeadingZeroes(arr) {
    while (arr[arr.length - 1] === '0') {
        arr.pop();
    }
}

const reverse = function (x) {
    let sign = '';
    x = x.toString();
    x = x.split("");
    if (x[0] === '-') sign = x.shift();
    deleteLeadingZeroes(x);
    x = Number(sign + x.reverse().join(""));
    if (x > 2147483647 || x < -2147483648) return 0;
    return x
};
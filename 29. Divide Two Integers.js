/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
const divide = function (dividend, divisor) {
    const is_divident_positive = dividend > 0;
    const is_divisor_positive = divisor > 0;
    const sign = is_divident_positive === is_divisor_positive;
    dividend = Math.abs(dividend);
    divisor = Math.abs(divisor);
    let quotient = 0;
    while ((dividend -= divisor) >= 0) {
        quotient++
    }
    quotient = sign ? quotient : parseInt('-' + quotient);
    if (quotient > 2147483647) return 2147483647;
    if (quotient < -2147483648) return -2147483648;
    return quotient;
};
let a = -2147483648;
let b = 2;
console.log(divide(a, b,));
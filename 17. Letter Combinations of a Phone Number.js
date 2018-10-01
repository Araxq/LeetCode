function handleNewDigit(letter_arr, digit_char) {
    let letter_set = [];
    switch (digit_char) {
        case '2':
            letter_set = ['a', 'b', 'c'];
            break;
        case '3':
            letter_set = ['d', 'e', 'f'];
            break;
        case '4':
            letter_set = ['g', 'h', 'i'];
            break;
        case '5':
            letter_set = ['j', 'k', 'l'];
            break;
        case '6':
            letter_set = ['m', 'n', 'o'];
            break;
        case '7':
            letter_set = ['p', 'q', 'r', 's'];
            break;
        case '8':
            letter_set = ['t', 'u', 'v'];
            break;
        case '9':
            letter_set = ['w', 'x', 'y', 'z'];
            break
    }
    let arr_length = letter_arr.length;
    for (let i = 0; i < arr_length; i++) {
        let current_combination = letter_arr[i];
        letter_arr[i] += letter_set[0];
        for (let j = 1; j < letter_set.length; j++) {
            letter_arr.push(current_combination + letter_set[j])
        }
    }
}


const letterCombinations = function (digits) {
    if (!digits) return [];
    let letter_arr = [''];
    digits.split('').forEach(digit => handleNewDigit(letter_arr, digit));
    return letter_arr;
};

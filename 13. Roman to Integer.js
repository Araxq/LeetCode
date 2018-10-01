const romanToInt = function (s) {
    let int = 0;
    for (let i = 0; i < s.length; i++) switch (s[i]) {
        case 'D':
            int += 500;
            break;

        case 'M':
            int += 1000;
            break;

        case 'C':
            if (s[i + 1] === 'D') {
                i++;
                int += 400;
                break
            }
            if (s[i + 1] === 'M') {
                i++;
                int += 900;
                break
            }
            int += 100;
            break;

        case 'L':
            int += 50;
            break;

        case 'X':
            if (s[i + 1] === 'L') {
                i++;
                int += 40;
                break
            }
            if (s[i + 1] === 'C') {
                i++;
                int += 90;
                break
            }
            int += 10;
            break;

        case 'V':
            int += 5;
            break;

        case 'I':
            if (s[i + 1] === 'V') {
                i++;
                int += 4;
                break
            }
            if (s[i + 1] === 'X') {
                i++;
                int += 9;
                break
            }
            int++;
            break
    }
    return int;
};

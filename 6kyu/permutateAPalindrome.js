"https://www.codewars.com/kata/58ae6ae22c3aaafc58000079/train/javascript";

function permuteAPalindrome(input) {
    let obj = {};
    for (let i = 0; i < input.length; i++) {
        if (!obj[input[i]]) {
            obj[input[i]] = 1;
        } else {
            obj[input[i]]++;
        }
    }
    if (input.length % 2 == 0) {
        for (letter in obj) {
            if (obj[letter] % 2 != 0) {
                return false;
            }
        }
    } else {
        let middleLetter;
        for (letter in obj) {
            if (obj[letter] % 2 != 0 && !middleLetter) {
                middleLetter = letter;
            } else if (obj[letter] % 2 != 0) {
                return false;
            }
        }
    }

    return true;
}

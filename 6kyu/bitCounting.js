"https://www.codewars.com/kata/526571aae218b8ee490006f4/train/javascript";

var countBits = function (n) {
    let binary = n.toString(2);
    let count = 0;
    for (let i = 0; i < binary.length; i++) {
        if (binary[i] === "1") {
            count++;
        }
    }
    return count;
};

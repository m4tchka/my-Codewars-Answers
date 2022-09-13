"https://www.codewars.com/kata/55908aad6620c066bc00002a/train/javascript";

function XO(str) {
    let countX = 0;
    let countO = 0;
    for (let i = 0; i < str.length; i++) {
        if (str.charAt(i).toLowerCase() == "x") {
            countX++;
        }
        if (str.charAt(i).toLowerCase() == "o") {
            countO++;
        }
    }
    return countX == countO;
}

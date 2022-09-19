"https://www.codewars.com/kata/5592e3bd57b64d00f3000047/train/javascript";

/* 
    First attempt - very slow - recalculates sum on each function call --- (BUT IT WORKED FIRST TIME !!)
*/

function findNb(m) {
    return countUp(m, 1);
}
function countUp(m, n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i ** 3;
    }
    if (sum > m) {
        return -1;
    } else if (sum == m) {
        return n;
    } else {
        return countUp(m, n + 1);
    }
}

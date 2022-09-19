"https://www.codewars.com/kata/5592e3bd57b64d00f3000047/train/javascript";

/* 
    Second attempt - faster - calls countUp with number to be checked, current bottom-most cube (the one with longest sides) and current sum of volume of all cubes.
    Passing sum down means not having to recalculate it each time - simply: 
        Add the new cube's value to the volume sum
        Check if that volume sum is greater or equal to the target value, m (returning -1 (overshoot, no valid solution), or the largest cube's side length)
        If it is smaller, then recursively call again but with n + 1 
*/

function findNb(m) {
    return countUp(m, 1, 0);
}
function countUp(m, n, sum) {
    sum += n ** 3;
    if (sum > m) {
        return -1;
    } else if (sum == m) {
        return n;
    } else {
        return countUp(m, n + 1, sum);
    }
}

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
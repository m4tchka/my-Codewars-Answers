"https://www.codewars.com/kata/5552101f47fc5178b1000050/train/javascript";

function digPow(n, p) {
    let arr = n.toString().split("").map(Number);
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        count += arr[i] ** (p + i);
    }
    return (count / n) % 1 == 0 ? count / n : -1;
}
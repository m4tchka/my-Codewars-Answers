"https://www.codewars.com/kata/5286b2e162056fd0cb000c20/train/javascript";

function collatz(n) {
    let arr = [n];
    while (n != 1) {
        if (n % 2 == 0) {
            arr.push(halve(n));
            n = halve(n);
        } else {
            arr.push(triplePlusOne(n));
            n = triplePlusOne(n);
        }F
    }
    return arr.map(String).join("->");
}
function halve(n) {
    return n / 2;
}
function triplePlusOne(n) {
    return 3 * n + 1;
}

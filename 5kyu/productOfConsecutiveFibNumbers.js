"https://www.codewars.com/kata/5541f58a944b85ce6d00006a/train/javascript";

function productFib(prod) {
    return fib(0, 1, prod);
}
function fib(fn, fn1, prod) {
    console.log("fib called with: ", fn, fn1);
    if (fn * fn1 > prod) {
        return [fn, fn1, false];
    } else if (fn * fn1 == prod) {
        return [fn, fn1, true];
    } else {
        return fib(fn1, fn1 + fn, prod);
    }
}
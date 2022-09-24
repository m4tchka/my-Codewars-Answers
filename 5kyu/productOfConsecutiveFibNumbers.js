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

/* 
    Recursive solution, calls a function, with 2 consecutive numbers of fib sequence and the target product
    FAILURE CONDITION: If the product of the 2 fib nubmers is greater than the target product (i.e. overshoot) return the numbers and false in an arr (breaks the "loop")
    SUCCESS CONDITION: If the product of the 2 fib nubmers equals the target product, return numbers and true in an arr (also breaks the "loop")
    CONTINUE CONDITION: If the product of the 2 fib numbers is less than the target product (i.e. undershoot) call the function again, but with the next fib nubmers
        NOTE: DON'T JUMP OVER 2 POSITIONS IN SEQUENCE (Ex. 1st & 2nd -> 3rd & 4th), instead like a "slinky" (i.e. 1st & 2nd -> 2nd & 3rd -> 3rd & 4th)
*/
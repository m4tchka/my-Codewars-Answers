"https://www.codewars.com/kata/5672682212c8ecf83e000050/train/javascript";

function dblLinear(n) {
    let u = [1]; 
    // Define starting array
    let yIndex = 0; 
    let zIndex = 0;
   // Define 2 variables corresponding to the indexes of u, where the entry in u at that index will be compared against the entry at the other index
    while (u.length <= n) {
        // The array will be pushed to each time, so stop when it is length n
        let y = 2 * u[yIndex] + 1;
        let z = 3 * u[zIndex] + 1;
        // Define 2 variables - the possible values to be pushed to the array on each loop
        if (y < z) {
            yIndex++;
        }
        if (z < y) {
            zIndex++;
        }
        /*
        The smaller of the 2 variables will be pushed, so increment that variable's index (so that on the next loop, that variable will be a different number,
        calculated from the next entry in the array.
        */
        if (z == y) {
            yIndex++;
            zIndex++;
        }
        // If the variables happen to be the same, increment both indexes (so that a specific value doesn't get pushed to u again on the next loop (i.e. no duplicates))
        u.push(Math.min(y, z));
        //Push the smaller variable
    }
    return u[n];
    // return last entry (which also happens to be entry n)
}

/* 
    REVIEW:
    TLDR: 2 indexes to track variables, push only 1 (the smaller) at a time per loop and increment its index
*/
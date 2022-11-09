"https://www.codewars.com/kata/5526fc09a1bbd946250002dc/javascript";

function findOutlier(integers) {
    let eCount = 0;
    let oCount = 0;
    for (let i = 0; i < 3; i++) {
        if (integers[i] % 2 == 0) {
            eCount++;
        } else {
            oCount++;
        }
    }
    if (eCount > oCount) {
        // In other words, the array is made up of mostly evens
        return integers.find((e) => {
            return e % 2 != 0;
        });
    } else {
        // Or the array is mostly odd
        return integers.find((e) => {
            return e % 2 == 0;
        });
    }
}
// Check first 3 elems
// If at least 2 elems are odd, the array is entirely odd except 1 (v.v)
// Return first elem that is not odd/even

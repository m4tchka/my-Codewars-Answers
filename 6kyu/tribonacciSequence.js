"https://www.codewars.com/kata/556deca17c58da83c00002db/train/javascript";

function tribonacci(signature, n) {
    let arr = signature;
    if (n < 3) {
        return arr.slice(0,n);
    } else {
        return appendNew(arr, n);
    }
}
function appendNew(arr, n) {
    if (arr.length === n) {
        return arr;
    } else {
        let next =
            arr[arr.length - 3] + arr[arr.length - 2] + arr[arr.length - 1];
        arr.push(next);
        return appendNew(arr, n);
    }
}

"https://www.codewars.com/kata/55bf01e5a717a0d57e0000ec/train/javascript"

function persistence(num) {
    return checkNumOfDigits(num.toString().split("").map(Number), 0);
}
function checkNumOfDigits(arr, count) {
    if (arr.length == 1) {
        return count;
    } else {
        let prod = arr.reduce((prev, curr) => {
            return prev * curr;
        });
        return checkNumOfDigits(
            prod.toString().split("").map(Number),
            count + 1
        );
    }
}

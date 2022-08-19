"https://www.codewars.com/kata/546e2562b03326a88e000020/train/javascript";

function squareDigits(num) {
    let arr = num.toString().split("");
    for (let i = 0; i < arr.length; i++) {
        arr[i] = Number(arr[i]) ** 2;
    }
    return Number(arr.join(""));
}

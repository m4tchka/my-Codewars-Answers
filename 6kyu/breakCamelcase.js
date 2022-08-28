"https://www.codewars.com/kata/5208f99aee097e6552000148/train/javascript";

function solution(string) {
    let arr = string.split("");
    let arr2 = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== arr[i].toLowerCase()) {
            arr2.push(" ", arr[i]);
        } else {
            arr2.push(arr[i]);
        }
    }
    return arr2.join("");
}

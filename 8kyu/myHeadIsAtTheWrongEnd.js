"https://www.codewars.com/kata/56f699cd9400f5b7d8000b55/train/javascript";

function fixTheMeerkat(arr) {
    let arr2 = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        arr2.push(arr[i]);
    }
    return arr2;
}

function fixTheMeerkat2(arr) {
    return arr.reverse();
}

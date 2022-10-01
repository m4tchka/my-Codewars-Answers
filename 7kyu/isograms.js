"https://www.codewars.com/kata/54ba84be607a92aa900000f1/train/javascript";

function isIsogram(str) {
    let arr = str.toLowerCase().split("");
    for (let i = 0; i < arr.length; i++) {
        if (arr.indexOf(arr[i]) !== arr.lastIndexOf(arr[i])) {
            return false;
        } else {
            continue;
        }
    }
    return true;
}

"https://www.codewars.com/kata/58f5c63f1e26ecda7e000029/train/javascript";

// Should be a 5.5

function wave(str) {
    if (str === "") {
        return [];
    }
    let entriesToBeSpliced = [];
    let arrayLength = str.length;

    let arrStr = Array(arrayLength).fill(str);

    for (let i = 0; i < arrStr.length; i++) {
        if (arrStr[i].charAt(i) === " ") {
            entriesToBeSpliced.push(i);
            continue;
        } else {
            arrStr[i] =
                arrStr[i].substring(0, i) +
                arrStr[i].charAt(i).toUpperCase() +
                arrStr[i].substring(i + 1);
        }
    }
    arrStr = arrStr.filter((item) => item !== str);
    return arrStr;
}


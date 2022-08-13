"https://www.codewars.com/kata/54ff3102c1bad923760001f3/train/javascript";

function getCount(str) {
    let arr = str.split("");
    let count = 0;
    arr.forEach((e) => {
        if (e === "a" || e === "e" || e === "i" || e === "o" || e === "u") {
            count++;
        }
    });
    return count;
}

"https://www.codewars.com/kata/5667e8f4e3f572a8f2000039/train/javascript";

function accum(s) {
    let arr = s.split("");
    for (let i = 0; i < arr.length; i++) {
        arr[i] = arr[i].toUpperCase() + arr[i].toLowerCase().repeat(i);
    }
    return arr.join("-");
}

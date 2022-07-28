"https://www.codewars.com/kata/57f780909f7e8e3183000078";

let x = [1, 2, 4, 6];
function grow(x) {
    let start = 1;
    for (let i = 0; i < x.length; i = i + 1) {
        start = start * x[i];
    }
    return start;
}

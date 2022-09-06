"https://www.codewars.com/kata/53dbd5315a3c69eed20002dd/train/javascript";

function filter_list(l) {
    let l2 = l.filter(checkType);
    return l2;
}

function checkType(e) {
    return typeof e === "number";
}
// ALTERNTATIVELY ---------

function filter_list(l) {
    let arr = [];
    for (let i = 0; i < l.length; i++) {
        if (typeof l[i] === "number") {
            arr.push(l[i]);
        }
    }
    return arr;
}
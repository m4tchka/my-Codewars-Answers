function encode(s) {
    let matrix = [];
    let arr = s.split("");
    for (let i = 0; i < arr.length; i++) {
        let arrCopy = [...arr];
        let uArr = arrCopy.splice(arrCopy.length - i, i);
        arrCopy.unshift(...uArr);
        matrix.push(arrCopy);
    }
    matrix.sort();
    let compare = matrix.map((e) => {
        return e.join("");
    });
    let index = compare.indexOf(arr.join(""));
    let encoded = matrix
        .map((e) => {
            return e[e.length - 1];
        })
        .join("");
    return [encoded, index];
}

function decode(s, i) {
    return "";
}

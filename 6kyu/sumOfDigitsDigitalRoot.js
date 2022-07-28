"https://www.codewars.com/kata/541c8630095125aba6000c00";

function digital_root(n) {
    let sum = 0;
    let arr = n.toString().split("");
    for (let i = 0; i < arr.length; i++) {
        sum += Number(arr[i]);
    }
    let x = sum;
    while (x > 9) {
        sum = 0;
        let arr2 = x.toString().split("");
        for (let i = 0; i < arr2.length; i++) {
            sum += Number(arr2[i]);
            x = sum;
        }
    }
    return x;
}

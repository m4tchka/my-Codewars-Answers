"https://www.codewars.com/kata/5672682212c8ecf83e000050/train/javascript";

TODO: /* LEARN RECURSION FIRST */

function dblLinear(n) {
    let u = [1];
    u = addItem(u, n);
    //u=u.sort((a,b)=>{return a-b})

    console.log(u);
    function addItem(arr, n) {
        console.log("hi");
        let y = 2 * arr[arr.length - 1] + 1;
        let z = 3 * arr[arr.length - 1] + 1;
        if (!u.includes(y)) {
            u.push(y);
        }
        if (!u.includes(z)) {
            u.push(z);
        }
        if (arr.length == n) {
            return addItem(arr);
        }
    }
}

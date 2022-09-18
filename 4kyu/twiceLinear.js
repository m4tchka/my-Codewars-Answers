"https://www.codewars.com/kata/5672682212c8ecf83e000050/train/javascript";

function dblLinear(n) {
    let u = [1];
    let yIndex = 0;
    let zIndex = 0;

    while (u.length <= n) {
        let y = 2 * u[yIndex] + 1;
        let z = 3 * u[zIndex] + 1;
        if (y < z) {
            yIndex++;
        }
        if (z < y) {
            zIndex++;
        }
        if (z == y) {
            yIndex++;
            zIndex++;
        }
        u.push(Math.min(y, z));
    }
    return u[n];
}

/* 
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
*/

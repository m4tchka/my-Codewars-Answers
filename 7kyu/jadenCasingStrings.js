"https://www.codewars.com/kata/5390bac347d09b7da40006f6"

//This was legitimately at least 6 Kyu difficulty

String.prototype.toJadenCase = function () {
    let arr = this.split(" ");
    for (let i = 0; i < arr.length; i++) {
        arr[i] = arr[i][0].toUpperCase() + arr[i].substring(1).toLowerCase();
    }
    return arr.join(" ");
};

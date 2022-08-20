"https://www.codewars.com/kata/5626b561280a42ecc50000d1/train/javascript";

function sumDigPow(a, b) {
    let eureka = [];
    for (let i = a; i <= b; i++) {
        let sumDigits = i.toString().split("");
        sumDigits = sumDigits.map(Number);
        for (let i = 0; i < sumDigits.length; i++) {
            sumDigits[i] = sumDigits[i] ** (i + 1);
        }
        let sum = sumDigits.reduce((prev, curr) => prev + curr);
        if (i == sum) {
            eureka.push(i);
        }
    }
    return eureka;
}

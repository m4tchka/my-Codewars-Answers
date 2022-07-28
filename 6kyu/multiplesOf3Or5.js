"https://www.codewars.com/kata/514b92a657cdc65150000006";

function solution(number) {
    let sum = 0;
    let array = [];
    if (number <= 0) {
        return 0;
    }
    for (let i = 0; i < number; i++) {
        if (i % 3 == 0 || i % 5 == 0) {
            array.push(i);
        }
    }
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }
    return sum;
}

"https://www.codewars.com/kata/554b4ac871d6813a03000035";

function highAndLow(numbers) {
    numbersArray = numbers.split(" ");
    let highest = Math.max(...numbersArray);
    let lowest = Math.min(...numbersArray);
    return `${highest} ${lowest}`;
}

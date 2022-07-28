"https://www.codewars.com/kata/576bb71bbbcf0951d5000044";

function countPositivesSumNegatives(input) {
    let entry1 = [];
    let entry2 = 0;
    if (input === null || input.length === 0) {
        return [];
    } else {
        for (let i = 0; i < input.length; i++) {
            if (input[i] > 0) {
                entry1.push(input[i]);
            } else {
                entry2 = entry2 + input[i];
            }
        }
        return [entry1.length, entry2];
    }
}

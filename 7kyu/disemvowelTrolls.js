"https://www.codewars.com/kata/52fba66badcd10859f00097e";

let vowels = ["a", "e", "i", "o", "u"];
function disemvowel(str) {
    let result = "";
    for (i = 0; i < str.length; i++) {
        if (!vowels.includes(str[i].toLowerCase())) {
            result = result + str[i];
        }
    }
    return result;
}

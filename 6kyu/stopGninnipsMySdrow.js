"https://www.codewars.com/kata/5264d2b162488dc400000001";

function spinWords(string) {
    let wordArray = string.split(" ");
    for (let i = 0; i < wordArray.length; i++) {
        if (wordArray[i].length >= 5) {
            wordArray[i] = wordArray[i].split("").reverse().join("");
        }
    }
    return wordArray.join(" ");
}

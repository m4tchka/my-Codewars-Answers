"https://www.codewars.com/kata/5259b20d6021e9e14c0010d4";

function reverseWords(str) {
    let wordsArray = str.split(" ");
    for (let i = 0; i < wordsArray.length; i++) {
        wordsArray[i] = wordsArray[i].split("").reverse().join("");
    }
    return wordsArray.join(" ");
}

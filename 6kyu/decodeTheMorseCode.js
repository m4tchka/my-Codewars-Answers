"https://www.codewars.com/kata/54b724efac3d5402db00065e/train/javascript";

decodeMorse = function (morseCode) {
    let wordArr = morseCode.trim().split("   ");
    for (let i = 0; i < wordArr.length; i++) {
        let letterArr = wordArr[i].split(" ");
        for (let j = 0; j < letterArr.length; j++) {
            letterArr[j] = MORSE_CODE[letterArr[j]];
        }
        wordArr[i] = letterArr.join("");
    }
    return wordArr.join(" ");
};

"https://www.codewars.com/kata/54b42f9314d9229fd6000d9c/train/javascript";

function duplicateEncode(word) {
    word = word.toLowerCase();
    let letters = {};
    let newWord = [];
    for (let i = 0; i < word.length; i++) {
        if (!letters[word[i]]) {
            letters[word[i]] = 1;
        } else {
            letters[word[i]]++;
        }
    }
    for (let j = 0; j < word.length; j++) {
        if (letters[word[j]] == 1) {
            newWord.push("(");
        } else {
            newWord.push(")");
        }
    }
    return newWord.join("");
}
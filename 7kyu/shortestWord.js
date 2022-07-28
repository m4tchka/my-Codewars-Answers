"https://www.codewars.com/kata/57cebe1dc6fdc20c57000ac9";

function findShort(s) {
    let wordArray = s.split(" ");
    let wordLengthsArray = [];
    wordArray.map(function (word) {
        wordLengthsArray.push(word.length);
    });
    console.log(wordLengthsArray);
    return Math.min(...wordLengthsArray);
}

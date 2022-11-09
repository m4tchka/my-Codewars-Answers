"https://www.codewars.com/kata/520b9d2ad5c005041100000f/train/javascript";

function pigIt(str) {
    let sentence = str.split(" "); // split sentence into words
    for (let i = 0; i < sentence.length; i++) {
        //loop through each word
        if (sentence[i][0].toUpperCase() !== sentence[i][0].toLowerCase()) {
            // Check if word is a letter - if uppercase was the same as lowercase, it would NOT be a letter
            sentence[i] = sentence[i].substr(1) + sentence[i][0] + "ay"; // take substring of the word, and concatenate the first letter onto the end and "ay"
        }
    }
    return sentence.join(" ");
}

"https://www.codewars.com/kata/54bf1c2cd5b56cc47f0007a1/train/javascript";

/* 
    Loop through the string and create an object of unique letters and number of times that letter occurs
    Loop through that object andreturn the number of letters who occur more than once.
*/

function duplicateCount(text) {
    let list = {};
    let count = 0;
    text = text.toLowerCase();
    for (let i = 0; i < text.length; i++) {
        if (list[text[i]]) {
            list[text[i]]++;
        } else {
            list[text[i]] = 1;
        }
    }
    for (let key in list) {
        if (list[key] > 1) {
            count++;
        }
    }
    return count;
}

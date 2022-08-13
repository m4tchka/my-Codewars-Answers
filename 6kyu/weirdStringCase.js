"https://www.codewars.com/kata/52b757663a95b11b3d00062d/train/javascript";

function toWeirdCase(string) {
    let wordArr = string.split(" "); // [[this],[is],[a],[test]]

    for (let i = 0; i < wordArr.length; i++) {
        let letterArr = wordArr[i].split(""); // [[t,h,i,s],[i,s],[a],[t,e,s,t]]
        for (let l = 0; l < letterArr.length; l++) {
            l % 2 === 0
                ? (letterArr[l] = letterArr[l].toUpperCase())
                : (letterArr[l] = letterArr[l].toLowerCase());
        }
        wordArr[i] = letterArr.join("");
    }
    return wordArr.join(" ");
}

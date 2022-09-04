"https://www.codewars.com/kata/546f922b54af40e1e90001da/train/javascript";

// Truly awful "solution" lmao

function alphabetPosition(text) {
    let letterArr = text.toLowerCase().split(""); // ["t","h","e"...]
    let letterArr2 = [];
    for (let i = 0; i < letterArr.length; i++) {
        letterArr[i] = letterChanger(letterArr[i]);
        if (letterArr[i]) {
            letterArr2.push(letterArr[i]);
        }
    }
    return letterArr2.join(" ");
}
function letterChanger(letter) {
    let number = 0;
    switch (letter) {
        case "a":
            number = 1;
            break;
        case "b":
            number = 2;
            break;
        case "c":
            number = 3;
            break;
        case "d":
            number = 4;
            break;
        case "e":
            number = 5;
            break;
        case "f":
            number = 6;
            break;
        case "g":
            number = 7;
            break;
        case "h":
            number = 8;
            break;
        case "i":
            number = 9;
            break;
        case "j":
            number = 10;
            break;
        case "k":
            number = 11;
            break;
        case "l":
            number = 12;
            break;
        case "m":
            number = 13;
            break;
        case "n":
            number = 14;
            break;
        case "o":
            number = 15;
            break;
        case "p":
            number = 16;
            break;
        case "q":
            number = 17;
            break;
        case "r":
            number = 18;
            break;
        case "s":
            number = 19;
            break;
        case "t":
            number = 20;
            break;
        case "u":
            number = 21;
            break;
        case "v":
            number = 22;
            break;
        case "w":
            number = 23;
            break;
        case "x":
            number = 24;
            break;
        case "y":
            number = 25;
            break;
        case "z":
            number = 26;
            break;
        default:
            return;
    }
    return number;
}

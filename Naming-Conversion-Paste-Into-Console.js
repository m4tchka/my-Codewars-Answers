function camelKebabFilename(string) {
    arr = string.split(" ");
    arr[0] = arr[0].toLowerCase();
    for (let i = 1; i < arr.length; i++) {
        arr[i] = arr[i][0].toUpperCase() + arr[i].substring(1).toLowerCase();
    }
    return arr.join("-");
}
//Input: DNA to RNA Conversion
//Output: dna-To-Rna-Conversion

function camelFilename(string) {
    arr = string.split(" ");
    arr[0] = arr[0].toLowerCase();
    for (let i = 1; i < arr.length; i++) {
        arr[i] = arr[i][0].toUpperCase() + arr[i].substring(1).toLowerCase();
    }
    return "touch "+ arr.join("") + ".js ; code $_";
}
//Input: "Now you can browse privately"
//Ouput: "nowYouCanBrowsePrivately.js"

function kebabFilename(string) {
    arr = string.split(" ");
    for (let i = 0; i < arr.length; i++) {
        arr[i] = arr[i].toLowerCase();
    }
    return "touch "+ arr.join("-") + ".js ; code $_";
}
//Input: "Now you can browse privately"
//Ouput: "now-you-can-browse-privately.js"

function snakeFilename(string) {
    arr = string.split(" ");
    for (let i = 0; i < arr.length; i++) {
        arr[i] = arr[i].toLowerCase();
    }
    return "touch "+ arr.join("_") + ".js ; code $_";
}
//Input: "Now you can browse privately"
//Ouput: "now_you_can_browse_privately.js"

let filenameConverterObj = {
    camel: camelFilename,
    kebab: kebabFilename,
    snake: snakeFilename,
};

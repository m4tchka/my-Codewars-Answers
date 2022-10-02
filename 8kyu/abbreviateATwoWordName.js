"https://www.codewars.com/kata/57eadb7ecd143f4c9c0000a3/train/javascript";

function abbrevName(name) {
    let arr = name.split(" ");
    return arr[0][0].toUpperCase() + "." + arr[1][0].toUpperCase();
}

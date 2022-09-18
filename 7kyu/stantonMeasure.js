"https://www.codewars.com/kata/59a1cdde9f922b83ee00003b/train/javascript";

/*
  function:- stantonMeasure
  input:- integer array
  output:- stanton measure of the array
*/
function stantonMeasure(arr) {
    let countOf1s = arr.filter((e) => {
        return e == 1;
    }).length;
    let countOfNs = arr.filter((e) => {
        return e == countOf1s;
    }).length;
    return countOfNs;
}

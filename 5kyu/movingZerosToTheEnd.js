"https://www.codewars.com/kata/52597aa56021e91c93000cb0/train/javascript";

function moveZeros(arr) {
    let arr2 = arr.filter((e) => {
        return e !== 0;
    });
    arr.forEach((e) => {
        if (e === 0) {
            arr2.push(0);
        }
    });
    return arr2;
}

/*
    .filter DOES NOT implcitly return - must put return
    0 condition in the .forEach MUST BE STRICT = The test cases have empty arrays which get coerced to 0 
*/

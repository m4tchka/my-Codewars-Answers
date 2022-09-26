function encode(s) {
    let matrix = [];
    let arr = s.split("");
    // Define a matrix array (which will be the array of arrays to find the returned string from, and an array of letters of the string)
    for (let i = 0; i < arr.length; i++) {
        // Loop through each letter of the array of letters of the string
        let arrCopy = [...arr];
        // Define a variable to be mutated
        let uArr = arrCopy.splice(arrCopy.length - i, i);
        // NOTE: Define uArr, a s"P"lice of i letters from the end of the array copy (so that this splice can be unshifted to the start, like a queue, in the next step)
        // NOTE: Splice also MUTATES the arrCopy variable, so now arrCopy is missing "i" number of its letters from the end (i.e. when i = 2, arrCopy has its last 2 letters removed)
        arrCopy.unshift(...uArr);
        // Now add back the removed letters to the start of arrCopy
        matrix.push(arrCopy);
        // Push the arrCopy to the matrix
    }
    matrix.sort();
    // Sort the matrix (array of arrays) alphabetically
    let compare = matrix.map((e) => {
        return e.join("");
        // Define a variable, compare, which is the matrix but with the 2nd level arrays turned into strings. (So compare is an array of sorted strings)
    });
    let index = compare.indexOf(s);
    // Define a variable, index, which is the index of the original string, within the array of sorted strings,
    let encoded = matrix
        // Define a variable, encoded, which is to be the last letter of each entry in the sorted matrix
        .map((e) => {
            /*
                REVIEW:  .map vs .forEach - Both call the provided callback on each element of the array, but: 
                .map returns a new array (which can be captured in a variable), with a COPY of each element of the original array (after being operated on by the callback)
                NOTE: .map will NOT change the original array (i.e. pass by value)

                .forEach does NOT return anything, but performs its callback on the ORIGINAL element of each array 
                NOTE: .forEach WILL change the original array (i.e. pass by reference)

            */
            return e[e.length - 1];
            // Populate the array to be returned from the .map method, with the last element of each "e" (2nd level array), in the matrix array of arrays
        })
        .join("");
    // Define a variable encoded, which is the last character of each subarray, joined into a string, and return it, with the index.
    return [encoded, index];
}

function decode(s, i) {
    //    let coln = s.split("")
    //   console.log("coln: ",coln)
    // let col1 = s.split("").sort()
    //   console.log("col1: ",col1)
    //   let col2 = s.split("")
    let matrix = [];
    let output = "";
    let arr = s.split("");
    for (let i = 0; i < s.length; i++) {
        matrix.push(arr);
        console.log("matrix: ", matrix);
        matrix.sort();
        output += matrix[matrix.length - 1][i];
    }

    return "";
}

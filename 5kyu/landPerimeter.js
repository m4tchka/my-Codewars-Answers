"https://www.codewars.com/kata/5839c48f0cf94640a20001d3/train/javascript";

function landPerimeter(arr) {
    let perim = 0;
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            if (arr[i].charAt(j) == "X") {
                let perimToBeAdded = 4;
                if (i > 0 && arr[i - 1][j] == "X") {
                    perimToBeAdded--;
                }
                if (i < arr.length - 1 && arr[i + 1][j] == "X") {
                    perimToBeAdded--;
                }
                if (j > 0 && arr[i][j - 1] == "X") {
                    perimToBeAdded--;
                }
                if (j < arr[i].length && arr[i][j + 1] == "X") {
                    perimToBeAdded--;
                }
                perim += perimToBeAdded;
            } else {
                continue;
            }
        }
    }
    return "Total land perimeter: " + perim.toString();
}

/* 
    2 x for loop through each grid square. Check sequentially if each adjacent, non-diagonal square is an "X"
    If it is an "X", then check if each of the 4 adjacent squares is an X (i.e. is land), 
        If an adjacent square is an "X" then reduce by 1 the perimeter that that square contributes to the total perimeter
        Add that square's remaining perimeter contribution to the total perimeter
    If it is not an "X", then move to the next square
    Return the total perimeter, casted to a string, as part of another string
*/
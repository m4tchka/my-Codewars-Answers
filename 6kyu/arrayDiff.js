"https://www.codewars.com/kata/523f5d21c841566fde000009/train/javascript";

function arrayDiff(a, b) {
    return a.filter((e) => {
        return !b.includes(e);
    });
}

/* 
    Filters elements of a, returning an array of values from a, where each element has been checked if it is NOT included in array b
*/
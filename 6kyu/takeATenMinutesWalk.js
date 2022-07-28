"https://www.codewars.com/kata/54da539698b8a2ad76000228";

function isValidWalk(walk) {
    let nCount = 0;
    let eCount = 0;
    let sCount = 0;
    let wCount = 0;
    if (walk.length != 10) {
        return false;
    } else {
        for (let i = 0; i < walk.length; i++) {
            if (walk[i] === "n") {
                nCount++;
            } else if (walk[i] === "e") {
                eCount++;
            } else if (walk[i] === "s") {
                sCount++;
            } else {
                wCount++;
            }
        }
        if (nCount === sCount && eCount == wCount) {
            return true;
        } else {
            return false;
        }
    }
}

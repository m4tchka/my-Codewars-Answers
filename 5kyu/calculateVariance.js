"https://www.codewars.com/kata/5266fba01283974e720000fa/train/javascript"

//Really felt like a 5.5 - shuold learn reduce though...

var variance = function (numbers) {
    let count = 0;
    numbers.forEach((n) => {
        count += n;
    });
    let mean = count / numbers.length;
    let varArr = [];
    numbers.forEach((n) => varArr.push(n - mean));
    for (let i = 0; i < varArr.length; i++) {
        varArr[i] = varArr[i] ** 2;
    }
    let countToBeDivided = 0;
    varArr.forEach((n) => {
        countToBeDivided += n;
    });
    return countToBeDivided / numbers.length;
};

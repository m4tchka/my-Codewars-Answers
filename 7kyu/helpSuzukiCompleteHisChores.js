"https://www.codewars.com/kata/584dc1b7766c2bb158000226";

function choreAssignment(chores) {
    let arr2 = [];
    chores.sort((a, b) => {
        return a - b;
    });
    for (
        let i = 0, j = chores.length - 1;
        i <= chores.length / 2 + 1, j >= chores.length / 2;
        i++, j--
    ) {
        arr2.push(chores[i] + chores[j]);
    }
    arr2.sort(function (a, b) {
        return a - b;
    });
    return arr2;
}

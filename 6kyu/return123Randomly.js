"https://www.codewars.com/kata/593e84f16e836ca9a9000054/train/javascript";

function one_two_three() {
    let roll = one_two() + one_two();
    if (roll == 2) {
        return one_two_three();
    } else if (roll == 4) {
        return 3;
    } else {
        return one_two();
    }
}

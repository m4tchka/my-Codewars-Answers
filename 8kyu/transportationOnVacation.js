"https://www.codewars.com/kata/568d0dd208ee69389d000016/train/javascript";

function rentalCarCost(d) {
    let cost = d * 40;
    if (d < 3) {
        return cost;
    } else if (d < 7) {
        return cost - 20;
    } else {
        return cost - 50;
    }
}

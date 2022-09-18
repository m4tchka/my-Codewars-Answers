"https://www.codewars.com/kata/595bbea8a930ac0b91000130/train/javascript";

function calculate1RM(w, r) {
    switch (r) {
        case 0:
            return 0;
        case 1:
            return w;
        default:
            let E = w * (1 + r / 30);
            let M = (100 * w) / (101.3 - 2.67123 * r);
            let L = w * r ** 0.1;
            return Math.round(Math.max(E, M, L));
    }
}

/* 
    If r = 0 (not able to complete a repetition at that weight, return 0)
    Else if r = 1 (only able to complete 1 repetition, that is the max liftable weight, so return w)
    Else calculate the max liftable weight prediction from the 3 formulae, return that, rounded to nearest integer
*/
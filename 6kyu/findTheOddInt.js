"https://www.codewars.com/kata/54da5a58ea159efa38000836/train/javascript";

function findOdd(A) {
    for (let i = 0; i < A.length; i++) {
        let count = A.filter((e) => e === A[i]).length;

        if (count % 2 != 0) {
            return A[i];
        }
    }
}

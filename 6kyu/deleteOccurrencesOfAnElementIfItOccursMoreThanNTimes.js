"https://www.codewars.com/kata/554ca54ffa7d91b236000023/train/javascript";

function deleteNth(arr, n) {
    let obj = {};
    let arr2 = [];
    for (let i = 0; i < arr.length; i++) {
        if (!obj[arr[i]]) {
            obj[arr[i]] = 1;
            arr2.push(arr[i]);
        } else {
            obj[arr[i]]++;
            if (obj[arr[i]] <= n) {
                arr2.push(arr[i]);
            }
        }
    }
    return arr2;
}

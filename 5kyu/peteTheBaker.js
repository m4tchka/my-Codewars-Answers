"https://www.codewars.com/kata/525c65e51bf619685c000059/train/javascript";

function cakes(recipe, available) {
    let arr = [];
    for (let key in recipe) {
        if (!available[key]) {
            return 0;
        }
        arr.push(Math.floor(available[key] / recipe[key]));
    }

    arr = arr.sort((a, b) => {
        return a - b;
    });
    return arr[0];
}

/* 
    Careful to use BRACKET NOTATION when looping through object keys !!!
    Also note .sort DOES NOT IMPLCITLY RETURN
*/

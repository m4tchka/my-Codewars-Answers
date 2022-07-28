"https://www.codewars.com/kata/54fb853b2c8785dd5e000957";

function chain(input, fs) {
    for (i = 0; i < fs.length; i++) {
        input = fs[i](input);
    }
    return input;
}

"https://www.codewars.com/kata/5b6db1acb118141f6b000060/train/javascript"

function recycle(array) {
    let paper = [];
    let glass = [];
    let organic = [];
    let plastic = [];

    for (let i = 0; i < array.length; i++) {
        switch (array[i].material) {
            case "paper":
                paper.push(array[i].type);
                break;
            case "glass":
                glass.push(array[i].type);
                break;
            case "organic":
                organic.push(array[i].type);
                break;
            default:
                plastic.push(array[i].type);
                break;
        }
        if (array[i].secondMaterial) {
            switch (array[i].secondMaterial) {
                case "paper":
                    paper.push(array[i].type);
                    break;
                case "glass":
                    glass.push(array[i].type);
                    break;
                case "organic":
                    organic.push(array[i].type);
                    break;
                default:
                    plastic.push(array[i].type);
                    break;
            }
        }
    }
    let output = [paper, glass, organic, plastic];
    return output;
}
// Declare 4 arrays, p, g, o, pl /
// Loop through the array of input objects /
// For each read the material /
// Switch on material /
// for each type of material, push the input[i].type to its corresponding bin array /
// if input i secondmaterial, switch on this, and push to corresponding /

//return [p,g,o,pl]
// List bin even if empty

"https://www.codewars.com/kata/5556282156230d0e5e000089";

function DNAtoRNA(dna) {
    let rna = dna.split("").map(function (letter) {
        if (letter === "T") {
            return "U";
        } else {
            return letter;
        }
    });
    return rna.join("");
}

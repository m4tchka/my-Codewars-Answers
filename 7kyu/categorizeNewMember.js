"https://www.codewars.com/kata/5502c9e7b3216ec63c0001aa/train/javascript";

function openOrSenior(data) {
    let members = [];
    for (let i = 0; i < data.length; i++) {
        if (data[i][0] >= 55 && data[i][1] > 7) {
            members.push("Senior");
        } else members.push("Open");
    }
    return members;
}

function openOrSenior(data) {
    return data.map((e) => {
        return e[0] >= 55 && e[1] > 7 ? "Senior" : "Open";
    });
}

"https://www.codewars.com/kata/53af2b8861023f1d88000832/train/javascript";

function areYouPlayingBanjo(name) {
    return name.charAt(0) === "R" || name.charAt(0) === "r"
        ? name + " plays banjo"
        : name + " does not play banjo";
}

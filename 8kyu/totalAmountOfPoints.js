"https://www.codewars.com/kata/5bb904724c47249b10000131/train/javascript";

function points(games) {
    return games.reduce((prev, next) => {
        return (next[0] == next[2] ? 1 : next[0] < next[2] ? 0 : 3) + prev;
    }, 0);
}

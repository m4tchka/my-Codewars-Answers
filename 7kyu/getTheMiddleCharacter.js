"https://www.codewars.com/kata/56747fd5cb988479af000028";

function getMiddle(s) {
    if (s.length % 2 === 0) {
        return s.charAt(s.length / 2 - 1) + s.charAt(s.length / 2);
    }
    return s.charAt((s.length - 1) / 2);
}

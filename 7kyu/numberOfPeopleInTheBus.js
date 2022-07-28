"https://www.codewars.com/kata/5648b12ce68d9daa6b000099";

var number = function (busStops) {
    let passengerNumber = 0;
    for (i = 0; i < busStops.length; i++) {
        passengerNumber = passengerNumber + (busStops[i][0] - busStops[i][1]);
    }
    return passengerNumber;
};

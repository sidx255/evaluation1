
const currentScore = rolls => {

    const strike = 10;
    const spare = 10;
    let frameStart = true;
    let currentScore = 0;
    let length = 20;

    for (let roll = 0; roll < length; roll++) {
        if (frameStart == true) {
            if (rolls[roll] == strike) {
                currentScore += (strike + rolls[roll + 1] + rolls[roll + 2])
                length--
            } else {
                currentScore += rolls[roll]
                frameStart = false
            }
        } else {
            // we are at the end of a frame, do we have a spare
            if (rolls[roll] + rolls[roll - 1] == spare) {
                // spare so add this roll + next roll
                // we don't add 10 because the first ball was already added at the frame start
                currentScore += rolls[roll] + rolls[roll + 1]
            } else {
                currentScore += rolls[roll]
            }
            frameStart = true;
        }
    }
    if (isNan.currentScore) throw new error 
    return currentScore;
}


//console.log(currentScore(rolls));

module.exports = { currentScore };
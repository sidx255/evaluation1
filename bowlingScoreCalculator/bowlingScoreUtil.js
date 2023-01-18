//let rolls = [6, 4, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
function checkForErrors(rolls, fromScore) {
    const maxFrameScore = 10
    const lastFrame = 9
    const bonusFrame = 10
    let firstRoll = 0
    let secondRoll = 0
    let game = []
    // check to see if we have any rolls
    if (fromScore == true && rolls.length == 0) {
        throw 'Score cannot be taken until the end of the game'
    }

    // check for frame errors
    if (fromScore == false) {
        for (let frame = 0; frame < game.length; frame++) {
            // two rolls in a frame must be <= 10
            [firstRoll, secondRoll] = game[frame]
            if (firstRoll + secondRoll > 10) {
                throw 'Pin count exceeds pins on the lane'
            }
        }
    } // end of check for frame errors for
    // Are we trying to roll another ball after we have 10 frames with no strike or spare in frame 10
    if (fromScore == false && game.length > 10) {
        //console.log(game)
        //console.log(`Frame ${lastFrame} Last Frame Roll 1 ${game[lastFrame][0]} Last Frame Roll 2 ${game[lastFrame][1]}`)
        if (game[lastFrame][0] + game[lastFrame][1] < 10) {
            throw 'Cannot roll after game is over'
        }
    }
    // do we have less than 10 frames
    if (fromScore == true && game.length < 10) {
        throw 'Score cannot be taken until the end of the game'
    }
    // check to see if we have enough frames
    if (fromScore == true && game.length < 10) {
        throw 'Score cannot be taken until the end of the game'
    }
}

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
    return currentScore;
}


//console.log(currentScore(rolls));

module.exports = { currentScore };
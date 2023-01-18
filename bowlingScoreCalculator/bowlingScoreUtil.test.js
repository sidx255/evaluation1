

const { currentScore } = require('./bowlingScoreUtil');

describe('Bowling Game Utilities', () =>
    describe('Calculating Current Score', () => {
        it('Should return 16 when rolls are [6, 4, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]', () => {
            const result = currentScore([6, 4, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
            expect(result).toEqual(16);
        });
    })
)
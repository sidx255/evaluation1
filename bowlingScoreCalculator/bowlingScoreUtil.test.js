

const { currentScore } = require('./bowlingScoreUtil');

describe('Bowling Game Utilities', () =>
    describe('Calculating Current Score', () => {
        it('Should throw an error when frame size is not 10', () => {
            expect(()=>
            {
                currentScore([3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 3, 3, 3, 3, 3])
            }).toThrow("Frame size is not 10");
        }),

        it('Should return 16 when rolls are [6, 4, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]', () => {
            const result = currentScore([6, 4, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
            expect(result).toEqual(16);
        }),

        it('Should return 30 when rolls are [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 10, 10]', () =>
        {
            const result = currentScore([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 10, 10]);
            expect(result).toEqual(30);
        }),

        it('Should return 90 when rolls are [3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6]', () =>
        {
            const result = currentScore([3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6]);
            expect(result).toEqual(90);
        });
    })
)
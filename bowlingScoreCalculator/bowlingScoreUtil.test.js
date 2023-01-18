

const { currentScore } = require("./bowlingScoreUtil");

describe("Bowling Game Utilities", () =>
  describe("Calculating Current Score", () => {
    it("Should throw an error when frame size is not 10", () => {
      expect(() => {
        currentScore([3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 3, 3, 3, 3, 3]);
      }).toThrow("Frame size is not 10");
    }),

      it("Should return 16 when rolls are [6, 4, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]", () => {
        const result = currentScore([6, 4, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
        expect(result).toEqual(16);
      }),

      it("Should return 30 when rolls are [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 10, 10]", () => {
        const result = currentScore([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 10, 10]);
        expect(result).toEqual(30);
      }),

      it("Should return 90 when rolls are [3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6]", () => {
        const result = currentScore([3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6]);
        expect(result).toEqual(90);
      }),
      it('should return score when input is all open frames', () => {
        const result = currentScore([1, 2, 3, 4, 5, 4, 4, 3, 3, 3, 2, 3, 4, 5, 5, 2, 3, 3, 3, 2]);
        expect(result).toEqual(64);
      })
    it('should return score when input consist of spare frames', () => {
      const result = currentScore([1, 2, 3, 4, 5, 4, 5, 5, 3, 3, 2, 3, 4, 5, 5, 2, 3, 3, 3, 2]);
      expect(result).toEqual(70);
    })
    it('should return score when input consist of strike frames', () => {
      const result = currentScore([1, 2, 3, 4, 5, 4, 5, 5, 3, 3, 2, 3, 4, 5, 10, 3, 3, 3, 2]);
      expect(result).toEqual(79);
    }),
    it('should return score when input consist of strike frames', () => {
      const result = currentScore([1, 1, 2, 3, 4, 5, 4, 5, 5, 3, 3, 2, 3, 4, 5, 5, 3, 7, 10, 10, 4]);
      expect(result).toEqual(102);
    });
  })
);
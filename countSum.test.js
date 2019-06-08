// to get started ( npm install --save-dev jest ) and ( npm init )

var countPosSumNeg = require("./countSum");

describe("countPosSumNeg", () => {
  it("Should give count of positive numbers", () => {
    expect(countPosSumNeg([1, 2, 3])).toEqual([3, 0]);
  });

  it("Should give sum of negative numbers", () => {
    expect(countPosSumNeg([-1, -2, -3])).toEqual([0, -6]);
  });

  it("should give count of pos and sum of neg", () => {
    expect(countPosSumNeg([1, 2, 3, -1, -2, -3])).toEqual([3, -6]);
  });

  it("should return empty array if no input is given", () => {
    expect(countPosSumNeg([])).toEqual([]);
  });
});

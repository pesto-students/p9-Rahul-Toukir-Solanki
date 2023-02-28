const mathOperations = require("./functions");

test("add 2 + 2 to equal 4", () => {
  expect(mathOperations.sum(2, 2)).toBe(4);
});

test("add 7 - 2 to equal 5", () => {
  expect(mathOperations.diff(7, 2)).toBe(5);
});

test("add 5 * 2 to equal 10", () => {
  expect(mathOperations.product(5, 2)).toBe(10);
});

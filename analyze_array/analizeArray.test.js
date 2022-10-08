const analizeArray = require("../analyze_array/analyzeArray");

test("Not null", () => {
  expect(analizeArray([])).toBe("Error");
});

test("Returns object", () => {
  expect(analizeArray([1, 2, 3])).toEqual({
    average: 2,
    min: 1,
    max: 3,
    length: 3,
  });
});

test("With negatives", () => {
  expect(analizeArray([0, -2, 3, -1])).toEqual({
    average: 0,
    min: -2,
    max: 3,
    length: 4,
  });
});

test("Numbers and strings", () => {
  expect(analizeArray([0, "a", 3, 1])).toEqual("Error");
});

const calculator = require("./calculator");

//Add
test("Not null", () => {
  expect(calculator.add()).toBe("Error");
});
test("Add 2 numbers", () => {
  expect(calculator.add(2, 2)).toBe(4);
});
test("Add number and string", () => {
  expect(calculator.add(2, "a")).toBe("Error");
});
test("Add string and number", () => {
  expect(calculator.add("as", "3")).toBe("Error");
});

//Divide
test("Not null", () => {
  expect(calculator.divide()).toBe("Error");
});
test("Divide 2 numbers", () => {
  expect(calculator.divide(2, 2)).toBe(1);
});
test("Divide by 0", () => {
  expect(calculator.divide(2, 0)).toBe("Error");
});
test("Divide number and string", () => {
  expect(calculator.divide(2, "a")).toBe("Error");
});

//Subtract
test("Not null", () => {
  expect(calculator.subtract()).toBe("Error");
});
test("Subtract 2 numbers", () => {
  expect(calculator.subtract(2, 2)).toBe(0);
});
test("Subtract numbers with negative", () => {
  expect(calculator.subtract(2, -2)).toBe(4);
});
test("Subtract number and string", () => {
  expect(calculator.subtract(2, "a")).toBe("Error");
});
test("Subtract string and number", () => {
  expect(calculator.subtract("as", "3")).toBe("Error");
});

//Multiply
test("Not null", () => {
  expect(calculator.multiply()).toBe("Error");
});
test("Multiply 2 numbers", () => {
  expect(calculator.multiply(2, 2)).toBe(4);
});
test("Multiply number and string", () => {
  expect(calculator.multiply(2, "a")).toBe("Error");
});

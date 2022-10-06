const reverseString = require("./reverseString");

test("Not null", () => {
  expect(reverseString(" ")).toBe("Error");
});
test("Reverse elements", () => {
  expect(reverseString("Hello")).toBe("olleH");
});
test("Strings only", () => {
  expect(reverseString(5124)).toBe("Error");
});

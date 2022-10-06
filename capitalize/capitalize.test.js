const capitalize = require("./capitalize");
test("Check if its a string", () => {
  expect(capitalize(21331)).toBe("Error");
});
test("Not null", () => {
  expect(capitalize(" ")).toBe("Error");
});
test("Capitzalize one word", () => {
  expect(capitalize("hello!")).toBe("Hello!");
});
test("Capitalize multiple words", () => {
  expect(capitalize("hello world")).toBe("Hello World");
});
test("Multiple spaces", () => {
  expect(
    capitalize("    hello   world  with multiple  white     spaces    ")
  ).toBe("Hello World With Multiple White Spaces");
});

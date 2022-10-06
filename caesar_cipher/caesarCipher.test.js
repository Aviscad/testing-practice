const caesarCipher = require("./caesarCipher");

test("Null or 0", () => {
  expect(caesarCipher(" ", 0)).toBe("Error");
});

test("Greater than 25", () => {
  expect(caesarCipher("a", 26)).toBe("Error");
});
test("a", () => {
  expect(caesarCipher("a", 1)).toBe("b");
});
test("Shift every letter", () => {
  expect(caesarCipher("abcdefghijklmnopqrstuvwxyz", 1)).toBe(
    "bcdefghijklmnopqrstuvwxyza"
  );
});
test("Shift with puntuation", () => {
  expect(caesarCipher("abc! def!,:; g.", 1)).toBe("bcd! efg!,:; h.");
});
test("Plain text", () => {
  expect(caesarCipher("defend the east wall of the castle", 1)).toBe(
    "efgfoe uif fbtu xbmm pg uif dbtumf"
  );
});

const functions = require("./functions.js");

test("Adds 2 + 2 to equal NOT ", () => {
  expect(functions.add(2, 2)).not.toBe(5);
});
test("Should be NULL", () => {
  expect(functions.isNull()).toBeNull();
});
test("Should be falsy", () => {
  expect(functions.checkValue(null)).toBeFalsy();
});
test("user should be Roel Wagner object", () => {
  expect(functions.createUser()).toEqual({
    firstname: "Roel",
    lastname: "Wagner",
  });
});

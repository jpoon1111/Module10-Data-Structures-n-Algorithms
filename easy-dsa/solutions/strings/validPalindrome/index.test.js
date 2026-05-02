const validPalindrome = require("./index");

test(" ", () => {
  expect(validPalindrome("racecar")).toStrictEqual(true);
});

test(" ", () => {
  expect(validPalindrome("r ace  c  a r")).toStrictEqual(true);
});

test(" ", () => {
  expect(validPalindrome("r  acec    aR")).toStrictEqual(true);
});

test(" ", () => {
  expect(validPalindrome("r      acec   ...//ar")).toStrictEqual(true);
});

test(" ", () => {
  expect(validPalindrome("racecars")).toStrictEqual(false);
});

test(" ", () => {
  expect(validPalindrome("hello")).toStrictEqual(false);
});

test(" ", () => {
  expect(validPalindrome("i like to code")).toStrictEqual(false);
});

test(" ", () => {
  expect(validPalindrome(" ")).toStrictEqual(true);
});




const selectionSort = require("./index");

test(" ", () => {
  expect(selectionSort([1, 0, 1])).toStrictEqual([0, 1, 1]);
});

test(" ", () => {
  expect(selectionSort([1, 2, 3, 0, 1])).toStrictEqual([0, 1, 1, 2, 3]);
});

test(" ", () => {
  expect(selectionSort([0, 0, 1, 2, 3])).toStrictEqual([0, 0, 1, 2, 3]);
});

test(" ", () => {
  expect(selectionSort([-2, 1, -3, 4, -1, 2, -5, 0])).toStrictEqual([-5, -3, -2, -1, 0, 1, 2, 4]);
});


const depthFirstSearch = require("./index");

class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

const A = new Node("A");
const B = new Node("B");
const C = new Node("C");
const D = new Node("D");
const E = new Node("E");
const F = new Node("F");

A.left = B;
A.right = C;
B.left = D;
B.right = E;
C.left = F;

function tester(root) {
  const set = new Set();
  let curr = head;

  while (curr) {
    if (set.has(curr)) return true;
    set.add(curr);
    curr = curr.next;
  }

  return false;
}

test(" ", () => {
  let clone1 = Object.assign(Object.create(Object.getPrototypeOf(A)), A);
  let clone2 = Object.assign(Object.create(Object.getPrototypeOf(A)), A);
  expect(depthFirstSearch(clone1)).toStrictEqual(tester(clone2));
});

test(" ", () => {
  let clone1 = Object.assign(Object.create(Object.getPrototypeOf(A)), A);
  let clone2 = Object.assign(Object.create(Object.getPrototypeOf(A)), A);
  expect(depthFirstSearch(clone1)).toStrictEqual(tester(clone2));
});

test(" ", () => {
  let clone1 = Object.assign(Object.create(Object.getPrototypeOf(A)), A);
  let clone2 = Object.assign(Object.create(Object.getPrototypeOf(A)), A);
  expect(depthFirstSearch(clone1)).toStrictEqual(tester(clone2));
});

test(" ", () => {
  let clone1 = Object.assign(Object.create(Object.getPrototypeOf(A)), A);
  let clone2 = Object.assign(Object.create(Object.getPrototypeOf(A)), A);
  expect(depthFirstSearch(clone1)).toStrictEqual(tester(clone2));
});

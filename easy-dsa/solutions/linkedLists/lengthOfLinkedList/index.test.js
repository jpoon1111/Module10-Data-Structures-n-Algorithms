const lengthOfList = require("./index");


class Node{
  constructor (val, next){
    this.val = val
    this.next = next
  }
}

function tester(head){
  let length = 0
  let curr = head

  while(curr){
    length++
    curr = curr.next
  }
  return length
}


test(" ", () => {
  const ll = new Node(1, new Node(2, new Node(3, new Node(4, new Node(5, null)))))
  const ll2 = new Node(1, new Node(2, new Node(3, new Node(4, new Node(5, null)))))
  expect(lengthOfList(ll)).toStrictEqual(tester(ll2));
});

test(" ", () => {
  const ll = new Node(10, new Node(20, new Node(30, new Node(40, new Node(50, null)))))
  const ll2 = new Node(10, new Node(20, new Node(30, new Node(40, new Node(50, null)))))
  expect(lengthOfList(ll)).toStrictEqual(tester(ll2));
});

test(" ", () => {
  const ll = new Node(10, new Node(20, null))
  const ll2 = new Node(10, new Node(20, null))
  expect(lengthOfList(ll)).toStrictEqual(tester(ll2));
});

test(" ", () => {
  const ll = new Node(10, new Node(20, new Node(90, new Node(87, new Node(1002, null)))))
  const ll2 = new Node(10, new Node(20, new Node(90, new Node(87, new Node(1002, null)))))
  expect(lengthOfList(ll)).toStrictEqual(tester(ll2));
});




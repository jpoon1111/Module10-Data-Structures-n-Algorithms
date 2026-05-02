const middle = require("./index");


class Node{
  constructor (val, next){
    this.val = val
    this.next = next
  }
}

function tester(head){
  let slow = head
  let fast = head

  while (fast && fast.next){
    slow = slow.next
    fast = fast.next.next
  }

  return slow

}


test(" ", () => {
  const ll = new Node(1, new Node(2, new Node(3, new Node(4, new Node(5, null)))))
  const ll2 = new Node(1, new Node(2, new Node(3, new Node(4, new Node(5, null)))))
  expect(middle(ll)).toStrictEqual(tester(ll2));
});

test(" ", () => {
  const ll = new Node(10, new Node(20, new Node(30, new Node(40, new Node(50, null)))))
  const ll2 = new Node(10, new Node(20, new Node(30, new Node(40, new Node(50, null)))))
  expect(middle(ll, 2)).toStrictEqual(tester(ll2, 2));
});

test(" ", () => {
  const ll = new Node(10, new Node(20, null))
  const ll2 = new Node(10, new Node(20, null))
  expect(middle(ll)).toStrictEqual(tester(ll2));
});

test(" ", () => {
  const ll = new Node(10, new Node(20, new Node(90, new Node(87, new Node(1002, null)))))
  const ll2 = new Node(10, new Node(20, new Node(90, new Node(87, new Node(1002, null)))))
  expect(middle(ll)).toStrictEqual(tester(ll2));
});




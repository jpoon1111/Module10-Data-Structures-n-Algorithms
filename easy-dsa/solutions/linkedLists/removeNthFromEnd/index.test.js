const removeNthFromEnd = require("./index");


class Node{
  constructor (val, next){
    this.val = val
    this.next = next
  }
}

function tester(head, n){
  let dummy = new Node(0, head)
  let l = dummy
  let r = head

  while (n > 0 && r){
    r = r.next
    n -= 1
  }

  while (r){
    l = l.next
    r = r.next
  }
  l.next = l.next.next

  return dummy.next

}


test(" ", () => {
  const ll = new Node(1, new Node(2, new Node(3, new Node(4, new Node(5, null)))))
  const ll2 = new Node(1, new Node(2, new Node(3, new Node(4, new Node(5, null)))))
  expect(removeNthFromEnd(ll, 1)).toStrictEqual(tester(ll2, 1));
});

test(" ", () => {
  const ll = new Node(10, new Node(20, new Node(30, new Node(40, new Node(50, null)))))
  const ll2 = new Node(10, new Node(20, new Node(30, new Node(40, new Node(50, null)))))
  expect(removeNthFromEnd(ll, 2)).toStrictEqual(tester(ll2, 2));
});

test(" ", () => {
  const ll = new Node(10, new Node(20, null))
  const ll2 = new Node(10, new Node(20, null))
  expect(removeNthFromEnd(ll, 1)).toStrictEqual(tester(ll2, 1));
});

test(" ", () => {
  const ll = new Node(10, new Node(20, new Node(90, new Node(87, new Node(1002, null)))))
  const ll2 = new Node(10, new Node(20, new Node(90, new Node(87, new Node(1002, null)))))
  expect(removeNthFromEnd(ll, 2)).toStrictEqual(tester(ll2, 2));
});




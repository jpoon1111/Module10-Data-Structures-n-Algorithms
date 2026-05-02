const listCycle = require("./index");


class Node{
  constructor (val, next){
    this.val = val
    this.next = next
  }

  addCycle(){
    let curr = this
    let prev = null

    while (curr){
      prev = curr
      curr = curr.next
    }

    prev.next = this
  }
}

function tester(head) {
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
  const ll = new Node(1, new Node(2, new Node(3, new Node(4, new Node(5, null)))))
  const ll2 = new Node(1, new Node(2, new Node(3, new Node(4, new Node(5, null)))))
  ll.addCycle()
  ll2.addCycle()
  expect(listCycle(ll)).toStrictEqual(tester(ll2));
});

test(" ", () => {
  const ll = new Node(10, new Node(20, new Node(30, new Node(40, new Node(50, null)))))
  const ll2 = new Node(10, new Node(20, new Node(30, new Node(40, new Node(50, null)))))
  ll.addCycle()
  ll2.addCycle()
  expect(listCycle(ll)).toStrictEqual(tester(ll2));
});

test(" ", () => {
  const ll = new Node(10, new Node(20, null))
  const ll2 = new Node(10, new Node(20, null))
  expect(listCycle(ll)).toStrictEqual(tester(ll2));
});

test(" ", () => {
  const ll = new Node(10, new Node(20, new Node(90, new Node(87, new Node(1002, null)))))
  const ll2 = new Node(10, new Node(20, new Node(90, new Node(87, new Node(1002, null)))))
  ll.addCycle()
  ll2.addCycle()
  expect(listCycle(ll)).toStrictEqual(tester(ll2));
});




const isPalindrome = require("./index");


class Node{
  constructor (val, next){
    this.val = val
    this.next = next
  }
}

function tester(head){

  const values = []
  let curr = head
  
  while (curr){
      values.push(curr.val)
      curr = curr.next 
  }
  
  let l = 0
  let r = values.length - 1
  
  while (l <= r){
      
      if (values[r] !== values[l]){
          return false
      }
      l++
      r--
  }
  
  return true 
}


test(" ", () => {
  const ll = new Node(1, new Node(2, new Node(3, new Node(4, new Node(5, null)))))
  const ll2 = new Node(1, new Node(2, new Node(3, new Node(4, new Node(5, null)))))
  expect(isPalindrome(ll)).toStrictEqual(tester(ll2));
});

test(" ", () => {
  const ll = new Node(10, new Node(20, new Node(30, new Node(40, new Node(50, null)))))
  const ll2 = new Node(10, new Node(20, new Node(30, new Node(40, new Node(50, null)))))
  expect(isPalindrome(ll)).toStrictEqual(tester(ll2));
});

test(" ", () => {
  const ll = new Node(10, new Node(20, null))
  const ll2 = new Node(10, new Node(20, null))
  expect(isPalindrome(ll)).toStrictEqual(tester(ll2));
});

test(" ", () => {
  const ll = new Node(10, new Node(20, new Node(90, new Node(87, new Node(1002, null)))))
  const ll2 = new Node(10, new Node(20, new Node(90, new Node(87, new Node(1002, null)))))
  expect(isPalindrome(ll)).toStrictEqual(tester(ll2));
});

test(" ", () => {
  const ll = new Node(10, new Node(20, new Node(20, new Node(20, new Node(10, null)))))
  const ll2 = new Node(10, new Node(20, new Node(20, new Node(20, new Node(10, null)))))
  expect(isPalindrome(ll)).toStrictEqual(tester(ll2));
});

test(" ", () => {
  const ll = new Node(1, new Node(2, new Node(2, new Node(2, new Node(1, null)))))
  const ll2 = new Node(1, new Node(2, new Node(2, new Node(2, new Node(1, null)))))
  expect(isPalindrome(ll)).toStrictEqual(tester(ll2));
});





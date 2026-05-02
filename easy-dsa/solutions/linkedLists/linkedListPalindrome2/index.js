/** Linked List Palindrome **
 *
 * Return true if the given linked list is a palindrome.
 * Otherwise return false.
 *
 * @example
 * isPalindrome(1 -> 2 -> 2 -> 1) true
 * isPalindrome(10 -> 20 -> 30) false
 * isPalindrome(10 -> 20 -> 300 -> 10 -> 20) true
 *
 */

const isPalindrome = (head) => {
  let slow = head;
  let fast = head;

  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  let curr = slow;
  let prev = null;

  while (curr) {
    let next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
  }

  let l = head;
  let r = prev;

  while (r) {
    if (l.val !== r.val) {
      return false;
    }

    l = l.next;
    r = r.next;
  }

  return true;
};

module.exports = isPalindrome;

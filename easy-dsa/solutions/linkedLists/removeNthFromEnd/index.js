/** Remove Nth Node from End of Linked List  **
 * 
 * Given an integer n, remove the nth node of the linked list 
 * form the end. 
 *  
 * @example
 * reverse(1 -> 2 -> 3, 2) 1 -> 3
 * reverse(10 -> 20 -> 30 -> 40, 1) 10 -> 20 -> 30
 * reverse(100 -> 200 -> 300 -> 400 -> 500, 2) 100 -> 200 -> 300 -> 500
 * 
 */

 const removeNthFromEnd = (head, n) => {
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




//DO NOT EDIT BELOW THIS LINE
class Node{
  constructor (val, next){
    this.val = val
    this.next = next
  }
}

module.exports = removeNthFromEnd;
/** Reverse Linked List **
 * 
 * Reverse the given linked list. 
 *  
 * @example
 * reverse(1 -> 2 -> 3) -> 3 -> 2 -> 1
 * reverse(10 -> 20 -> 30) -> 30 -> 20 -> 10
 * reverse(100 -> 200 -> 300) -> 300 -> 200 -> 100
 * 
 */

 const reverse = (head) => {
  let curr = head
  let prev = null

  while (curr){
      const next = curr.next
      curr.next = prev
      prev = curr
      curr = next
  }

  return prev

}


module.exports = reverse;
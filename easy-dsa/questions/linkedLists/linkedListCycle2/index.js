/** Linked List Cycle **
 * 
 * Return true if there is a cycle in the given linked list.
 * Otherwise return false.  
 *  
 * @example
 * listCycle(1 -> 2 -> 3 -> 1) -> true
 * listCycle(10 -> 20 -> 30) -> false
 * listCycle(100 -> 200 -> 300 -> 100) -> true
 * 
 */



// List Cycle using Floyd's Algorithm
// slow : n + 1 
// fast: n - 2 
// n+1-2 = n-1 // because of "fast" and "slow" formula, you get n + 1 -2 which then overall results in n - 1
// which means that in ever iteration,  the distance is being closer by 1  when "fast" cycles back and loops through the numbers again 
// what this does is that it checks when does "fast" meets up with "slow" on the same Node, but if they never sit on the same Node (this is after starting off at the same node) then there is no Cycle and does not exist for the Node Chain



 const listCycle = (head) => {
  let fast = head
  let slow  = head

  while (fast && fast.next){
    slow = slow.next
    fast = fast.next.next

    if (slow === fast){
      return true
    }
  }

  return false



module.exports = listCycle;
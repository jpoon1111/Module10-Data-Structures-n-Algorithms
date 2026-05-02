/** Middle of Linked List **
 * 
 * Find the middle node of the given linked list. 
 *  
 * @example
 * middle(1 -> 2 -> 3) -> 2
 * middle(10 -> 20 -> 30 -> 40) -> 30 
 * middle(100 -> 200 -> 300 -> 400 -> 500) -> 300 
 * 
 */

// you start off with 2 points(slow, fast) with both starting at index[0]
// the purpose is to have fast pointer move twice as fast as our slow pointer. Every time the slow pointer moves one step(node), fast pointer should move two steps(nodes)
// so this trick will find the middle point without dividing by 2(which will cause us to loop to find the length then length/2 then loop again to reach the middle ) 
// using the slow pointer to find the middle while fast will find the end (or total length of the Node chain)
  //  (1) -> (2) -> (3) -> (4) -> (5) -> (6) -> (7) -> (8)
  //          ^slow
  //                 ^fast

  // Solving for i which represents the middle point for the "slow pointer"
  // n = total distance or lenght of Node chain (link list)
  // slow = 1/n 
  // 1/n* i = 1/2
  // (n)((1/n* i)) = (1/2) (n) mulitple both sides by n to cancel out n because n = n/1 which then cancels eachother out 
  // i = n/2  so now it becomes here because whatever n is divided by 2 will get you half

  // now fast...
  // fast = 2/n
  // n/2 * 2/n = 1 (where 1 represents the entire Node chain or Linked list total length)

 const middle = (head) => {
  let point1 = head;
  let point2 = head;

  while(point2 && point2.next){
    point1 = point1.next;
    point2 = point2.next.next;
  }
  // once it is done then return point1 which will be the final value that references the middle point 
  return point1;

}


// const middle = (head) => {
  // let slow = head;
  // let fast = head;

  // this checks for if there is a node for "fast " but also check the next node with "fast.node"
  // while(fast && fast.next){// the reason you want to check both fast and fast.next is that if there is another node after current and if not then it won't run another loop
                              // because without fast.next, then it will run even if this is the last node in the Node chain
  //   console.log(slow, fast)
  //   slow = slow.next;
  //   fast = fast.next.next;
  //   console.log(slow, fast)
  
  // }
  // return slow;
//  }








//DO NOT EDIT BELOW THIS LINE
class Node{
  constructor (val, next){
    this.val = val
    this.next = next
  }
}

module.exports = middle;


// Hristina

// 19:19

// Let me check the code

// Hristina 19:20

// The Node class is defined after the function because your middle function doesn’t actually create any new nodes, it just works with the linked list that’s passed in.

// JavaScript reads the whole file first, so the order here doesn’t matter as long as Node exists when the code runs.

// Also, notice that in the test file they define Node again. That’s because the tests need their own linked list instances to compare results, separate from your function.

// So in short:

// middle only uses the structure (val, next)

// it doesn’t depend on where Node is defined in the file

// tests recreate Node to build their own data for checking

// Your logic for slow/fast pointers looks correct


// Jason Poon

// 20:20

// ok so it exist only to use val and next so that in my code, i can say "fast.next"
// otherwise without it, i will get an error


// Hristina

// 20:21

// Hi Jason
// 20:21

// Yes exactly 😊

// You need next because each node points to the next one, so fast.next works.
// Without it, there’s no link to move forward, so you’d get an error
 
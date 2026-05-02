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

// checks if there is a cycle anywhere in the node chain
//    for example...
//     (1) -> (2) -> (3) -> (4) -> (5) -> (6)
//                    ^                    |
//                    |                    v
//                    ---------------------                     

 const listCycle = (head) => {
    
    const set = new Set();// gerenate an object that is an instance of "class Set". However you cannot access it like a normal object since it is only a reference of the object as a check list
    let curr = head;

    while(curr){
        if(set.has(curr)){// using set.has(curr) check if set have "curr" which visually looks like this
                                                                                                    // Set {
                                                                                                    //   nodeA { value: 1, next: NodeB },
                                                                                                    //   nodeB { value: 2, next: NodeC },
                                                                                                    //   ...

            return true;// if set has a key:value pair for curr then STOP and cut execution
        }

        set.add(curr);// else we will add the curr to set as reference // the current node in the node chain
        
        curr = curr.next; // finally we will update curr with the next Node and run another loop 
    }
    return false;
}


module.exports = listCycle;

// const listCycle = (head) => {
//     const set = new Set();      // store node references
//     let curr = head;            // start at the head

//     while (curr) {              // while we haven't reached null
//         if (set.has(curr)) {    // if this node is already in the Set
//             return true;        // CYCLE DETECTED
//         }
//         set.add(curr);          // remember this node
//         curr = curr.next;       // move to next node
//     }
//     return false;               // reached end → no cycle
// };


// There are two solid “more advanced” ways to detect a cycle in a linked list:

// ---

// ## 1) Using a **Set** (Hash Set) — Simple & Explicit

// ### Idea

// As you traverse the list, store each node reference in a `Set`.
// If you ever see the same node again → cycle detected.

// ### Code (JavaScript)

// ```js
// function hasCycle(head) {
//   const visited = new Set();
//   let current = head;

//   while (current !== null) {
//     if (visited.has(current)) {
//       return true; // cycle found
//     }
//     visited.add(current);
//     current = current.next;
//   }

//   return false; // no cycle
// }
// ```

// ### Why this works

// * Nodes in a linked list are unique objects in memory
// * A cycle means you revisit the same object reference

// ### Tradeoffs

// * ✅ Easy to understand
// * ❌ Uses extra memory: **O(n)** space

// ---

// ## 2) “Advanced” Approach — Floyd’s Cycle Detection (Tortoise & Hare)

// This is the one interviewers *really* want.

// ### Idea

// Use two pointers:

// * `slow` → moves 1 step
// * `fast` → moves 2 steps

// If there’s a cycle, they will eventually meet.

// ### Code

// ```js
// function hasCycle(head) {
//   let slow = head;
//   let fast = head;

//   while (fast !== null && fast.next !== null) {
//     slow = slow.next;
//     fast = fast.next.next;

//     if (slow === fast) {
//       return true; // cycle detected
//     }
//   }

//   return false; // no cycle
// }
// ```

// ### Why this works

// Think of it like runners on a track:

// * Fast pointer laps the slow one if there's a loop

// ### Tradeoffs

// * ✅ **O(1) space** (no extra memory)
// * ✅ Still O(n) time
// * ⚠️ Slightly harder to understand at first

// ---

// ## When to use each

// * Use **Set** if:

//   * You want clarity / debugging
//   * Not memory constrained

// * Use **Floyd’s Algorithm** if:

//   * You're in an interview
//   * You want optimal performance

// ---

// ## Extra (next-level insight)

// Once you detect a cycle with Floyd’s algorithm, you can also:

// * Find the **start of the cycle**
// * Count cycle length

// If you want, I can walk you through that step-by-step — that’s where this problem gets *really* interesting.

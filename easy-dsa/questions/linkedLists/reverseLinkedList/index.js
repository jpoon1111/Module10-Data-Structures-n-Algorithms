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

// In order to reverse the linked List we will use 3 pointers
// (null) -> (1) -> (2) -> (3) -> (4) -> (5) -> (6) ->
//    ^       ^      ^
//   prev    curr   next
// (null) -> (1) -> (2) -> (3) -> (4) -> (5) -> (6) ->
//    ^       ^      ^
//   prev    curr   next


 const reverse = (head) => {
    let curr = head;
    let prev = null;
    // rule of thumb
    // 1. store next node first so it doesn't lost it's access from current node because the bridge is lost once we point it to prev
    // 2. redirect the bridge(next param) to the previous node(which is prev but set as null)
    // 3. then move prev node to reference the current node (since prev will eventually hold the head variable and represent  the reversed version of the node train)
    // 4. then move current to the next node and then that will finish one iteration and repeat until we hit null
    while (curr){
        let next = curr.next;// generates a next pointer to point to the next Node. After first iteration, this will then act as an update moving to next Node
                            // this acts as a placeholder for next

        curr.next = prev;//set the current.next parameter value to prev. So changing from (null) -> (1) to (null) <- (1) 

        prev = curr; // prev will now move to curr

        curr = next; // this will now move curr to next Node

    }
    //once the loop is done,  prev will hold the new head
    return prev;
}


module.exports = reverse;


//  const reverse = (head) => {
//     let curr = head;
//     let prev = null;
//     while (curr){
//         let next = curr.next;// generates a next pointer to point to the next Node. After first iteration, this will then act as an update moving to next Node
//                             // this acts as a placeholder for next

//         curr.next = prev;//set the current.next parameter value to prev. So changing from (null) -> (1) to (null) <- (1) 

//         prev = curr; // prev will now move to curr

//         curr = next; // this will now move curr to next Node

//     }
//     //once the loop is done,  prev will hold the new head
//     return prev;
// }


// Here's a **detailed breakdown** of all common ways to reverse a singly linked list, including code, visual explanations, and complexity analysis.

// We'll assume a basic `ListNode` constructor:

// ```javascript
// class ListNode {
//     constructor(val, next = null) {
//         this.val = val;
//         this.next = next;
//     }
// }
// ```

// ---

// ## 1. Iterative (Pointer Manipulation) – Your method

// **Idea:** Traverse the list, reversing each arrow to point backward. Keep `prev`, `curr`, and `next` pointers.

// ```javascript
// const reverseIterative = (head) => {
//     let prev = null;
//     let curr = head;
//     while (curr) {
//         let nextTemp = curr.next; // save next node
//         curr.next = prev;         // reverse the link
//         prev = curr;              // move prev forward
//         curr = nextTemp;          // move curr forward
//     }
//     return prev;                  // new head
// };
// ```

// **Time:** O(n)  
// **Space:** O(1)  
// **Visual:**

// ```
// Initial:   null ← 1 → 2 → 3 → null
// Step 1:    null ← 1   2 → 3 → null
// Step 2:    null ← 1 ← 2   3 → null
// Step 3:    null ← 1 ← 2 ← 3
// Result:    3 → 2 → 1 → null
// ```

// ---

// ## 2. Recursive

// **Idea:** Reverse the sub‑list after the current head, then fix the head pointer.

// ```javascript
// const reverseRecursive = (head) => {
//     // Base case: empty list or single node
//     if (!head || !head.next) return head;

//     const newHead = reverseRecursive(head.next);
//     head.next.next = head;  // make the next node point back
//     head.next = null;       // break original forward link
//     return newHead;
// };
// ```

// **Time:** O(n)  
// **Space:** O(n) – call stack depth  
// **Visual (for 1→2→3→null):**

// ```
// reverse(1) calls reverse(2) calls reverse(3)
// reverse(3): head.next is null → returns 3
// Back to reverse(2): head=2, newHead=3; set 2.next.next (3.next) = 2 → 3→2, then 2.next=null → returns 3
// Back to reverse(1): head=1, newHead=3; set 1.next.next (2.next) = 1 → 2→1, then 1.next=null → returns 3
// Final: 3→2→1→null
// ```

// ---

// ## 3. Using a Stack

// **Idea:** Push all nodes onto a stack, then pop and relink.

// ```javascript
// const reverseStack = (head) => {
//     if (!head) return null;
//     const stack = [];
//     let curr = head;
//     while (curr) {
//         stack.push(curr);
//         curr = curr.next;
//     }
//     const newHead = stack.pop();
//     let tail = newHead;
//     while (stack.length) {
//         tail.next = stack.pop();
//         tail = tail.next;
//     }
//     tail.next = null;
//     return newHead;
// };
// ```

// **Time:** O(n)  
// **Space:** O(n)  
// **Visual:** Push [1,2,3] → pop 3 → pop 2 → pop 1 → links: 3→2→1→null.

// ---

// ## 4. Using an Array (store values)

// **Idea:** Store node values, then rebuild the list backwards.

// ```javascript
// const reverseArray = (head) => {
//     const values = [];
//     let curr = head;
//     while (curr) {
//         values.push(curr.val);
//         curr = curr.next;
//     }
//     // Build new list from the end of the array
//     let newHead = null;
//     for (let i = values.length - 1; i >= 0; i--) {
//         newHead = new ListNode(values[i], newHead);
//     }
//     return newHead;
// };
// ```

// **Time:** O(n)  
// **Space:** O(n) – array plus new nodes (or you could reuse nodes but that's more complex)  
// **Note:** This creates *new* nodes; original list remains unchanged (if that matters).

// ---

// ## 5. Tail Recursion (iterative style with recursion)

// **Idea:** Pass `prev` and `curr` as parameters, eliminating the need for an explicit loop.

// ```javascript
// const reverseTailRec = (head, prev = null) => {
//     if (!head) return prev;
//     const next = head.next;
//     head.next = prev;
//     return reverseTailRec(next, head);
// };
// ```

// **Time:** O(n)  
// **Space:** O(n) – still uses call stack (though some JS engines may optimize tail calls, not guaranteed)  
// **Visual:** Same as iterative but via recursion.

// ---

// ## 6. Functional with `Array.reduce`

// **Idea:** Convert to array of nodes, then reduce to build reversed list.

// ```javascript
// const reverseReduce = (head) => {
//     // Collect nodes into array
//     const nodes = [];
//     let curr = head;
//     while (curr) {
//         nodes.push(curr);
//         curr = curr.next;
//     }
//     // Build reversed list using reduceRight
//     return nodes.reduceRight((acc, node) => {
//         node.next = acc;
//         return node;
//     }, null);
// };
// ```

// **Time:** O(n)  
// **Space:** O(n) – nodes array  
// **Explanation:** `reduceRight` starts from the last node, sets its `next` to the previously accumulated node, and returns the current node as the new accumulator. The final accumulator is the new head.

// ---

// ## 7. Two‑Pointer (similar to iterative but with a dummy node)

// A variant of iterative using a dummy head to simplify edge cases.

// ```javascript
// const reverseDummy = (head) => {
//     let dummy = null;
//     let curr = head;
//     while (curr) {
//         const next = curr.next;
//         curr.next = dummy;
//         dummy = curr;
//         curr = next;
//     }
//     return dummy;
// };
// ```

// This is essentially identical to the iterative version – only variable names differ.

// ---

// ## Summary Table

// | Method | Space | Recursion? | Mutates original? | Reuses nodes? |
// |--------|-------|------------|-------------------|---------------|
// | Iterative | O(1) | No | Yes | Yes |
// | Recursive | O(n) | Yes | Yes | Yes |
// | Stack | O(n) | No | Yes | Yes |
// | Array (values) | O(n) | No | No (creates new) | No |
// | Tail recursion | O(n) | Yes | Yes | Yes |
// | Reduce | O(n) | No | Yes (if using same nodes) | Yes |
// | Two‑pointer (dummy) | O(1) | No | Yes | Yes |

// All methods achieve O(n) time. The **iterative** method is the most memory‑efficient and commonly used in production.

// Would you like me to animate any specific method step‑by‑step or provide runnable tests?
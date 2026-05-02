/** Depth First Search **
 * 
 * Return the depth first values of the given binary tree in 
 * an array.  
 * 
 */



//                         (A) root
//                         /  \
//                        /    \
//                       /      \
//                      /        \
//           root.left(B)       (C) root.right
//                    /  \        /\
//                   /    \      /  \
// root.left.left->(D)    (E)   (F) (G)<-root.right.right

//starting from root you can choose which children to visit first and in our case either B or C 
// NOTE: In a standard convention you want to go B then C but in real Mathematically and logically, DFS only requires to take one path and go as deep before backtracking to the next one
// Depth first Search algorithm only requires you to go as deep as possible in one direction before going across
// We will start with B in this case to keep it simple
// from B we will check for D first and check if we can go down any further? If not then next child is E then F then G 

// unlike Breadth first Search,  we are going to go deep into a stack and a stack is where we interact with most top element first
// when we push an item, we will push the first Node which is A first then all the way down deep to the D node right? But when we remove from the stack, last one that goes in the stack comes out first.
// hence Last-In, First-Out ideology - Last Node or element that goes in the stack/box will be the first one to get out of the stack/box


//       ______pop()--->
//      |
//  |   |   |
//  |  (D)  |
//  |  (C)  |
//  |  (B)  |
//  |__(A)__|

// Now the actaul process -  first put root node A into the stack then pop it first before putting the next ones on to the stack. then store A into result
//       ______pop()--->
//      |
//  |   |   |
//  |   |   |
//  |   |   |
//  |   |   |
//  |__(A)__|
// result = ["A"]

// then check if the Node that we pop() have any children? If yes then we put that into the stack. In this case we have B and C, but we can choose which one goes in first. In this case C will go first then B so we go Deep with B first
// Since we pick B then we can pop() B from the stack first and then push that into result

//       ______pop()--->
//      |
//  |   |   |
//  |   |   |
//  |   |   |
//  |  (B)  |
//  |__(C)__|
// result = ["A", "B"]

// then check if the Node B have any children? yes D and E so those gets pushed into the stack

//       ______pop()--->
//      |
//  |   |   |
//  |   |   |
//  |  (D)  |
//  |  (E)  |
//  |__(C)__|

// then we pop() D and see if D have children, if not then we will do the same with E 

//       ______pop()--->
//      |
//  |   |   |
//  |   |   |
//  |   |   |
//  |   |  |
//  |__(C)__|
// result = ["A", "B", "D", "E"]

//Now we pop C and then check for any children for C if yes(we have F and G) then put that on the stack

//       ______pop()--->
//      |
//  |   |   |
//  |   |   |
//  |   |   |
//  |  (F)  |
//  |__(G)__|

// result = ["A", "B", "D", "E", "C" ]
// then we check for F and G 

// result = ["A", "B", "D", "E", "C", "F", "G" ]



 const depthFirstSearch = (root) => {
    let stack = [root];
    let result = []

    while(stack.length > 0){
        const current = stack.pop();
        if(current.left) { stack.push(current.left)}
        if(current.right) {stack.push(current.right)}
        result.push(current.val);
    }

    return result;

}


module.exports = depthFirstSearch;
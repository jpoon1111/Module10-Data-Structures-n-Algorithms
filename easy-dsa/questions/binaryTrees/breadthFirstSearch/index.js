/** Breadth First Search **
 * 
 * Return the breadth first values of the given binary tree in 
 * an array.  
 * 
 */


// Breadth means width / across a level ( in our case it means siblings)

// Starting from the Root you can visit any Child node  and then from there ideally you have a choice to visit their sibling's node or their child's node
// but in a breadth first search you need to explore across on the same level(width) before going deeper into the level (height)
// When we visit or explore, it will be A first then B then C then D then E then F then G 
// this is different from Depth first because Depth first goes down first (Height or Y-axis) before going across (x axis)

//                         (A) root
//                         /  \
//                        /    \
//                       /      \
//                      /        \
//           root.left(B)       (C) root.right
//                    /  \        /\
//                   /    \      /  \
// root.left.left->(D)    (E)   (F) (G)<-root.right.right

// in order to impleemnt this you need a Qeue data structure (a line)
// using an arrray, so...
//result = [];
//back of line             front
// ----------------------------->
// -----------------------------
//       [(G)(F)(E)(D) (C)(B) (A)]
// -----------------------------
// during the process A (the root) will be first to line up and first to exit which will be stored in result's array
//  [           (A)]
// result =["A"]
// then check if "A" have any children and it if does then get all the children in this case it is B and C into the Qeue
// [           (C)(B)]
// then we take the first child which is B and put it into the result's array
// result ["A", "B"]
// then we check if B have any children and if so then we take them and put it in the Qeue before checking for C 
// [         (E)(D)(C)]
// then we take  the first one in line which is now C 
// result ["A", "B", "C"]
// [            (E)(D)]
// then we check if C have any children and then add those into the Qeue
// [      (G)(F)(E)(D)]
// now we do the same thing for each Node and check if each of them have a child (we don't but the algorithm checks incase we have any for the Tree)
// result ["A", "B", "C"] -> result ["A", "B", "C", "D"] -> result ["A", "B", "C", "D", "E"] -> result ["A", "B", "C", "D", "E", "F"] -> result ["A", "B", "C", "D", "E", "F", "G"]

 const breadthFirstSearch = (root) => {
    const qeue = [root]// this stores the root which will be the first node value (A) to ensure that our loop runs
    const result = []// this is creating our result variable when all Nodes are finished processing through the qeue array

    while (qeue.length > 0){
        const current = qeue.shift();// what this does is remove the first element and returns the removed elements from array and stores it into current 
                                    // Note: this does change the original array and not a copy, so qeue length becomes 0 
        result.push(current.val); /// take current that is stored from qeue and push only current.val into the results
        
        // we are checking left because left will always store the first Child. If there is one then jump into here
        if (current.left !== null) {
            qeue.push(current.left);// if there is a child on left then we will push that into qeue (effectively increase the length back to 1)
        }
        // Now we check for  right as well to see if there are any other child and If there is one then jump into here. 
        if (current.right !== null) {
            qeue.push(current.right);// if there is a child on left then we will push that into qeue (effectively increase the length back to 2)
        }

        //the way this is set up it will start off with length of 1 and then it will shift which removes it from qeue[] then push that value into result
        // then it will check for ant children for the "current" node and if there is one then it will push all children into the qeue
        // since qeue is still greater than 0, then it will cycle again for each node starting from the previous child from left to right and 
        // each time it does this then it will run a check to see if each of these "current" Node also have a child and then push all that into the qeue
        // after loops if qeue reaches or  hit this line and it is still 0 then we finished checking
    }

    // this is where we... 
    return result;
    //  since it is all done 

}


module.exports = breadthFirstSearch;
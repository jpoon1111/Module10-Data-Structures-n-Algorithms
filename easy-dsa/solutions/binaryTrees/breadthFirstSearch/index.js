/** Breadth First Search **
 * 
 * Return the breadth first values of the given binary tree in 
 * an array.  
 * 
 */

 const breadthFirstSearch = (root) => {

    const queue = [ root ]
    const results = []

    while (queue.length > 0){
        const current = queue.shift()

        results.push(current.val)

        if (current.left) queue.push(current.left)
        if (current.right) queue.push(current.right)
    }

    return results

}


module.exports = breadthFirstSearch;
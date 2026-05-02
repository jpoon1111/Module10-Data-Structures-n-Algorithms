/** Length of Linked List **
 * 
 * Find the length of the given linked list. 
 *  
 * @example
 * lengthOfList(1 -> 2 -> 3) -> 3
 * lengthOfList(10 -> 20) -> 2
 * lengthOfList(100 -> 200 -> 300 -> 400) -> 4
 * 
 */

 const lengthOfList = (head) => {
    
    //we need to create a lenght variable that will start at 0 and this will hold the length since link list doesn't keep track of length
    let length = 0;
    // the curr will hold head (the first Node at index 0)
    let curr = head;
    

    while(curr) {// while curr is not null or check if curr have a Node then run
        length++;// increatment length  with the first one being from 0 to 1 for "head" which is stored in curr
        curr = curr.next;// set curr to the next Node and this repeats until curr reached the last node where curr  === null

    }

    return length;// once loop finishes return length
}


module.exports = lengthOfList;


// //Error Bugs
//  const lengthOfList = (head) => {
    
   
    

    
//     let curr = this;
    

//     while(curr) {

//     }

// }


// module.exports = lengthOfList;
class Node {
    constructor (val, next) {
        this.val = val;
        this.next = next;
    }
    print () {
        let output = "";// this is going to be the string to hold the value
        let curr = this;// this is reference to the curr instance of the "Node" but the first one is the "head", howver every ".next" will then reference the instance to the current node which is the instance of Node

        while(curr) { // this is the easier way to say (curr !== null) because it checks if a curr holds another node from the previous loop
            output+= `${curr.val} -> `;// this will generate the string based on "this.val" or more accurately "curr.val"
           
            //console.log(curr.val);// console.log(curr); will show the node in objects which holds 2 key/value pairs {val: val, next: next}
            curr = curr.next;
        }
         console.log(output);
    }
    addToEnd(node){
        
        let curr = this; // this is the current pointer that points to a current instance of a node (if it exists) as their initial state, which is always the head Node
        let prev = null; // this will be the prev pointer that will have it set to null  as it's initial state

        //this loop is to find the most recent node before creating a new node from "node" parameter that is passed up top
        while(curr){// while curr holds a Node and not null then run while loop since it exists aka (curr !== null) then..
            prev = curr // this then update from prev = "null" to  "this" which is from curr = this that references the instance of the Node 
            curr = curr.next; // we will set curr to curr.next (which holds another instance of Node or Null) but if it holds a null then it stops
        }
        //after curr === null then prev will just hold the instances of Node (4, null) 
        // that was before the new Node which is now "null" because curr.next is referencing null that is inside of 
        // Node(   4                    ,            null)
//          ^prev(holds Node(4, null))                ^curr holds curr.next will now hold null (because this is the slot for new Node())

        prev.next =  node;//this will take prev.next and point to a new Node that is create from the function that was passed into parameter (node)
     }
     removeByIndex(index){
        let curr = this;
        let prev = null;

        let i = 0;

        while (i < index) {//once i reaches index, which is is (head.removeByIndex(3) in our case then stop
            prev = curr;//prev now becomes this (current instance of a Node)
            curr = curr.next; // this moves to the next Node
            i++; // now increment to number and run it in while loop again to check if it is still less  than index
            
        }

        // once loop is finished then we need to update prev from Node(3, ....) or at index 2  ->  to Node(5, ....) or at index 4
        // we want to change the Node reference after Node(4, ....) at index 3 is deleted
        prev.next = prev.next.next;//sets "next" parameter which reference the next node chain to the one after the next Node ".next.next"
        return curr;
     }
    addAtIndex(index, node){
        let curr = this;
        let prev = null;

        let i = 0;

        while (i < index) {
            prev = curr;
            curr = curr.next;
            
            i++;
            
        }
        node.next = curr;
        prev.next = node;
    }
        
}

// long way
// const head = new Node(1, null);
// head.next = new Node (2, null)
// head.next.next = new Node (3, null)

// short way
const head = new Node(1, new Node(2, new Node(3, new Node(4, null))));// this creates nodes which becomes a chain of objects since almost everything is an object in javascript

head.addToEnd(new Node(5, null))
head.addToEnd(new Node(6, null))
head.addToEnd(new Node(7, null))
head.addToEnd(new Node(8, null))

console.log(head);


head.removeByIndex(3) // once Node at index 3 is removed then it is now 1 -> 2 -> 3 -> 5 -> 6 -> 7 -> 8 -> 
head.removeByIndex(4)// this is going off new Node chain of 1 -> 2 -> 3 -> 5 -> 6 -> 7 -> 8 ->  so after removeByIndex(4) it becomes 1 -> 2 -> 3 -> 5 -> 7 -> 8 -> 
head.removeByIndex(5) // now the new chain is:  1 -> 2 -> 3 -> 5 -> 7 -> 8 ->   so after removeByIndex(5) it becomes   1 -> 2 -> 3 -> 5 -> 7 -> 

head.addAtIndex(3, new Node(4, null)) // new the new chain is: 1 -> 2 -> 3 -> 5 -> 7 ->  so it becomes 1 -> 2 -> 3 -> 4 -> 5 -> 7 -> 


head.print()
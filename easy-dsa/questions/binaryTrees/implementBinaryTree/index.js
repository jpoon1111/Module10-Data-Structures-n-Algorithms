// what is a Binary Tree?

// It consist of parents and childrens
// Node A isthe parent and B and C are children but also B and C are parents to D + E and F + D
// D, E, F and G are leaves because they are the last Nodes with no children nodes below them



//                         (A) root
//                         /  \
//                        /    \
//                       /      \
//                      /        \
//           root.left(B)       (C) root.right
//                    /  \        /\
//                   /    \      /  \
// root.left.left->(D)    (E)   (F) (G)<-root.right.right
//                         ^     ^       
//             root.left.right  root.right.left
// The thing to keep a note of is that binary tree have max 2 children and max 1 root, so it is always right or left
// if there are more child then it is no longer a binary tree for example if A also have a Child node called H
// same if B and C also have more than 2 children even if they are childrens of eachother
// same if there was more than 1 root

//                  (H)<---(A) root or if (H) is a root
//                         /  \          /
//                        /    \       /
//                       /      \     /
//                      /        \  /
//           root.left(B)<--OR-->(C) root.right

// Types of Trees: No tree is allowed to have more than 1 root
// ========================================================================================================================
// TREE TYPE         | MAX CHILDREN | ARITY  | ROOT PROPERTY                | STRUCTURE BENEATH
// ========================================================================================================================
// Binary Tree       | 2            | 2      | Root can have 0, 1, or 2     | The root points to 'left' and 
//                   |              |        | children.                    | 'right' child nodes.
// ------------------------------------------------------------------------------------------------------------------------
// Ternary Tree      | 3            | 3      | Root can have 0 to 3         | Root has 'left', 'mid', and 
//                   |              |        | children.                    | 'right' paths.
// ------------------------------------------------------------------------------------------------------------------------
// Quaternary Tree   | 4            | 4      | Root can have 0 to 4         | Used in Quadtrees for spatial 
//                   |              |        | children.                    | partitioning (NE, NW, SE, SW).
// ------------------------------------------------------------------------------------------------------------------------
// N-ary (Any) Tree  | N            | N      | Root can have 0 to N         | Children are usually stored in a 
//                   |              |        | children.                    | dynamic list or array.
// ========================================================================================================================



class Node {
    constructor(val){
        this.val= val;// this is where key value is created when you call new Node() to create a new class then val is whatever you pass into it but if no value is passed then it will set it to undefined (unlike other languages where it breaks)
        this.left = null; // this creates a property called left which have a value of null (expected to be empty)
        this.right =  null; // this also creates a property called left which have a value of null (expected to be empty)
    }
}

const a = new Node("A");
const b = new Node("B");
const c = new Node("C");
const d = new Node("D");
const e = new Node("E");
const f = new Node("F");
const g = new Node("G");

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.left = f;
c.right = g;

console.log(a.val);


// In the context of JavaScript objects and classes, **assignment is creation**. This is one of the most flexible (and sometimes confusing) parts of the language compared to stricter languages like C++ or Java.

// ### How Assignment "Creates"
// In JavaScript, if you try to assign a value to a property that doesn't exist yet, the engine doesn't throw an error. Instead, it says, "Oh, this object doesn't have a `left` property? I'll create one right now and give it that value."

// Think of a JavaScript object like a physical folder. 
// * **Defining a parameter** is like someone handing you a piece of paper (the `val`).
// * **The Assignment (`this.left = null`)** is like you taking a marker and writing "Left" on a new tab inside that folder and putting a blank sheet in it.

// ---

// ### Declaration vs. Initialization
// In many other languages, you have to "declare" the variable at the top of the class before you can use it. In modern JavaScript (ES6+), you *can* do that, but you don't *have* to.

// **Option A: The way you are doing it (Dynamic Creation)**
// ```javascript
// class Node {
//   constructor(val) {
//     this.val = val;    // Created and assigned
//     this.left = null;  // Created and assigned
//   }
// }
// ```

// **Option B: Explicit Declaration (Public Class Fields)**
// ```javascript
// class Node {
//   left = null;  // Explicitly declared at the top
//   right = null;

//   constructor(val) {
//     this.val = val;
//   }
// }
// ```

// ### Why it works in the constructor
// The `constructor` is the "birth" of the object. When you call `new Node(5)`, JavaScript:
// 1.  Creates a brand-new empty object.
// 2.  Sets `this` to point to that empty object.
// 3.  Runs your code. Every time it hits a line with `this.something = ...`, it adds that "property" to the object.

// So while it looks like a simple assignment, because the property didn't exist a millisecond before that line ran, it is effectively the **creation** of that property for that specific instance.

// Does that help clear up the "assignment vs. creation" distinction?






// Hristina: They are not created when you pass the parameter, they are created inside the constructor when the object is initialized.

// constructor(val){
//   this.val = val;     // from parameter
//   this.left = null;   // created here
//   this.right = null;  // created here
// }
// So every time you do:

// new Node(5)
// JavaScript runs the constructor and creates those properties on the object




// Hristina: Yes, you are right that before ES6 in ECMAScript 2015 developers used constructor functions to create class-like structures. The idea is similar, but there is one important difference in how properties are attached.

// In your function example, the values are not being attached to the object instance. To match the class behavior, you need to use this, like this:

// function Node(val) {
//   this.val = val;
//   this.left = null;
//   this.right = null;
// }
// The class syntax is just a cleaner and more structured way of writing the same concept, but under the hood it still works with prototypes.



// Hristina: 
// Yes, that won’t work the same way 😊

// In your example, you’re just creating local variables inside a function, not attaching anything to an object.

// If you want to use a regular function, you would need to use this:

// function Node(val, left, right) {
//   this.val = val;
//   this.left = left || null;
//   this.right = right || null;
// }
// Then call it with:

// new Node(5);
// Without this and new, it will not create an object like a constructor does.

// You’re very close, just missing that part





// Hristina : Yes, that will work, but it’s a bit different 😊

// In this case, you are returning a plain object, not creating an instance like a constructor.

// Your function:

// function Node(val, left, right) {
//   let value = val;
//   let leftNode = left;
//   let rightNode = right;
//   return { value, leftNode, rightNode };
// }
// Then this works:

// let a = Node("A", "B", "C");
// console.log(a);
// But note, this is just a regular object, not a class/constructor pattern.

// So yes it works, just a different approach

// +------------------------+----------------------------------+----------------------------------+
// | Feature                | Factory function                 | Class                            |
// +------------------------+----------------------------------+----------------------------------+
// | Requires new           | No (just call Node())            | Yes (new Node())                 |
// +------------------------+----------------------------------+----------------------------------+
// | Prototype chain        | Object literal (no shared methods| Inherits from Node.prototype     |
// |                        | unless added)                    |                                  |
// +------------------------+----------------------------------+----------------------------------+
// | instanceof             | ❌ a instanceof Node → false     | ✅ a instanceof Node → true      |
// |                        | (unless manually set prototype)  |                                  |
// +------------------------+----------------------------------+----------------------------------+
// | Adding methods         | Must attach to each object or    | Define once in class, all        |
// |                        | manually set prototype           | instances share                  |
// +------------------------+----------------------------------+----------------------------------+
// | constructor property   | Points to Object (since it's a   | Points to Node class             |
// |                        | plain object)                    |                                  |
// +------------------------+----------------------------------+----------------------------------+
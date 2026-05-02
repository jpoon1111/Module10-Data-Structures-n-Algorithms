class Node{
    constructor(val){
        this.val = val
        this.left = null
        this.right = null
    }
}

const A = new Node("A")
const B = new Node("B")
const C = new Node("C")
const D = new Node("D")
const E = new Node("E")
const F = new Node("F")

A.left = B
A.right = C
B.left = D
B.right = E
C.left = F

console.log(A)
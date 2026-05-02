class Node{
  constructor(val, next){
    this.val = val
    this.next = next
  }

  print(){
    let output = ""
    let curr = this

    while(curr){
      output += `${curr.val} -> `
      curr = curr.next

    }
    console.log(output)
  }

  addToEnd(node){

    let curr = this
    let prev = null

    while (curr){
      prev = curr
      curr = curr.next
    }

    prev.next = node

  }

  removeByIndex(index){
    let curr = this
    let prev = null
    let i = 0

    while(i < index){
      prev = curr
      curr = curr.next
      i++
    }

    prev.next = prev.next.next
    return curr
  }

  addAtIndex(index, node){
    let curr = this
    let prev = null
    let i = 0

    while(i < index){
      prev = curr
      curr = curr.next
      i++
    }

    node.next = curr
    prev.next = node
  }
}

const head = new Node(1, new Node(2, new Node(3, new Node(4, null))))
head.addToEnd(new Node(5, null))
head.addToEnd(new Node(6, null))
head.addToEnd(new Node(7, null))
head.addToEnd(new Node(8, null))

head.removeByIndex(3)
head.removeByIndex(4)
head.removeByIndex(5)
head.addAtIndex(3, new Node(4, null))

head.print()
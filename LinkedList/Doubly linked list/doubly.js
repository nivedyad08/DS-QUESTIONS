class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class doublyLinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }
  isEmpty() {
    return this.size === 0;
  }
  getSize() {
    return this.size;
  }
  prepend(value) {
    const node = new Node(value);
    if (this.isEmpty()) {
      this.head = node;
      this.tail = node;
    } else {
      node.next = this.head;
      this.head.prev = node;
      this.head = node
    }
    this.size++;
  }

  append(value){
    const node = new Node(value)
    if(this.isEmpty()){
        this.head = node
        this.tail = node
    }else{
        this.tail.next = node
        node.prev = this.tail
        this.tail =node
    }
    this.size++
  }
  removeFromFront(){
    if(this.isEmpty()){
        return null
    }
    const value = this.head.value
    this.head = this.head.next
    this.size--
    return value
  }
  removeFromEnd(){
    if(this.isEmpty){
        return null
    }
    const value = this.tail.value
    if(this.size===1){
        this.head = null
        this.tail = null
    }else{
        this.tail = this.tail.prev
        this.tail.next = null
    }
    this.size--
    return value
  }
  print(){
    if(this.isEmpty()){
        console.log("List is empty");
    }else{
        let listValues =""
        let curr = this.head
        while(curr){
            listValues += `${curr.value} `
            curr = curr.next
        }
        console.log(listValues);
    }
  }
  printReverse(){
    if(this.isEmpty()){
        console.log("List is empty");
    }else{
        let listValues =""
        let curr = this.tail
        while(curr){
            listValues += `${curr.value} `
            curr = curr.prev
        }
        console.log(listValues);
    }
  }
}

const list = new doublyLinkedList()
list.prepend(10)
list.prepend(20)
list.prepend(30)
list.prepend(40)
list.prepend(50)
list.print()
list.append(100)
list.print()
list.removeFromFront()
list.print()
// list.removeFromEnd()
// list.print()
list.printReverse()


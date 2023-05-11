class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
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
  //inserting new node at the beginning
  prepend(value) {
    const node = new Node(value);
    if (this.IsEmpty) {
      this.head = node;
    } else {
      node.next = this.head;
      this.head = node;
    }
    this.size++;
  }
  //remove by using node
  removeFrom(index) {
    let removedNode;
    if (index < 0 || index > this.size) {
      return null;
    }
    if (index === 0) {
      removedNode = this.head;
      this.head = this.head.next;
    } else {
      let prev = this.head;
      for (let i = 0; i < index - 1; i++) {
        prev = prev.next;
      }
      removedNode = prev.next;
      prev.next = removedNode.next;
    }
    this.size--;
    return removedNode.value;
  }

  //search value
  searchValue(value) {
    if(this.isEmpty()) {
      return -1;
    }
    let curr = this.head;
    let i=0
    while(curr) {
      if(curr.value === value){
        return i;
      }
      curr = curr.next;
      i++;
    }
    return -1
  }

  print() {
    if(this.isEmpty()) {
      console.log("List is empty");
    } else {
      let curr = this.head;
      let listValues = "";
      while(curr) {
        listValues += `${curr.value} `;
        curr = curr.next;
      }
      console.log(listValues);
    }
  }
}

const list = new LinkedList();
list.prepend(10);
list.prepend(20);
list.prepend(30);
list.prepend(40);
list.print();
console.log(list.searchValue(34)); 

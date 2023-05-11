class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  getSize() {
    return this.size;
  }

  isEmpty() {
    return this.size === 0;
  }

  enqueue(value) {
    const node = new Node(value);
    if (this.isEmpty()) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail =  node
    }
    this.size++;
  }

  dequeue(){
    if(this.isEmpty()){
        return null
    }
    const value = this.head.value
    this.head = this.head.next
    if(this.getSize() === 1){
        this.tail = null
    }
    this.size--
    return value
  }

  peek(){
    if(this.isEmpty()){
        return null
    }
    return this.head.value
  }

  print() {
    let curr = this.head;
    let list = "";
    while (curr) {
      list += `${curr.value} `;
      curr = curr.next
    }
    console.log(list);
  }
}

const queue = new Queue()
console.log(queue.isEmpty());
queue.enqueue(78)
queue.enqueue(56)
queue.enqueue(34)
queue.enqueue(87)
queue.dequeue()
queue.print()
console.log(queue.peek());


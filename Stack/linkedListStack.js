class Node{
    constructor(value){
        this.value = value
        this.next = null
    }
}

class Stack{
    constructor(){
        this.head = null
        this.size = 0
    }

    isEmpty(){
        return this.size
    }

    push(value){
        let new_node = new Node(value)
        new_node.next = this.head
        this.head = new_node
    }

    pop(){
        if(this.isEmpty()){
            return null
        }
        let popped_node = this.head
        this.head = this.head.next
        popped_node.next = null
        return popped_node.value
    }

    peek(){
        if(this.isEmpty()){
            return null
        }
        return this.head.value
    }

    printStack(){
        let curr_node = this.head
        let list=''
        while(curr_node){
            list += `${curr_node.value} `
            curr_node = curr_node.next
        }
        console.log(list);
    }
}

const stack = new Stack()
console.log(stack.isEmpty());
stack.push(23)
stack.push(53)
stack.push(26)
stack.printStack()
console.log(stack.pop())
stack.printStack()
console.log(stack.peek());
class Node{
    constructor(value){
        this.value = value
        this.next = null
    }
}

class LinkedList{
    constructor(){
        this.head = null
        this.size=0
    }

    sEmpty(){
        return this.size === 0
    }

    getSize(){
        return this.size
    }

    //inserting new node at the beginning
    prepend(value){
        const node = new Node(value)
        if(this.IsEmpty){
            this.head = node
        }else{
            node.next = this.head
            this.head = node
        }
        this.size++
    }
}

const list = new LinkedList();
list.prepend(10)
list.prepend(20)
list.prepend(20)
class Queue{
    constructor(){
        this.items =[]
    }
    enqueue(value){
        this.items.push(value)
    }
    dequeue(){
        return this.items.shift()
    }
    isEmpty(){
        return this.items.length === 0
    }
    peek(){
        if(!this.isEmpty()){
            return this.items[0]
        }
        return null
    }
    size(){
        return this.items.length
    }
    print(){
        console.log(this.items.toString());
    }
    
}

const queue = new Queue()
console.log(queue.isEmpty());
queue.enqueue(10)
queue.enqueue(40)
queue.enqueue(60)
queue.enqueue(20)
queue.dequeue()
console.log(queue.peek())
console.log(queue.size());
queue.print()

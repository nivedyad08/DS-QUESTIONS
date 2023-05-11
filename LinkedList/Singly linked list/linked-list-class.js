//Node class
class Node{
    constructor(value){
        this.value = value
        this.next = null
    }
}

//LinkedList class
class LinkedList{
    constructor(){
        this.head =  null
        this.size =0
    }
    //methods
    isEmpty(){
        return this.size ===0
    }

    getSize(){
        return this.size
    }
}

//creating new instance of linkedlist

const list = new LinkedList
console.log('List is empty? ',list.isEmpty());
console.log('List size', list.getSize());
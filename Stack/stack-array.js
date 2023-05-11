class Stack{
    constructor(){
        this.items = []
    }
    push(element){
        this.items.push(element)
        // const ele = element.split("")
        // for(let i=0;i<=ele.length-1;i++){
            
        //     this.items.push(ele[i])
        // }
        // return this.items
    }
    removemid(){
        const mid = Math.floor(this.items.length/2)
        console.log(mid);
        this.items.splice(mid,1)
    }
    reverse(){
        for(let i=0;i<=this.items.length-1;i++){
            let left = 0
            let right = this.items.length-1
            while(left<right){
                let temp = this.items[left]
                this.items[left]=this.items[right]
                this.items[right]=temp
                left++
                right--
            }
        }
        console.log(this.items);
        return this.items
    }
    pop(){
        return this.items.pop()
    }
    peek(){
        return this.items[this.items.length-1]
    }
    isEmpty(){
        return this.items === 0
    }
    size(){
        return this.items.length
    }
    print(){
        console.log(this.items.toString());
    }
}

const stack = new Stack
// console.log(stack.isEmpty());
stack.push(17)
stack.push(14)
stack.push(15)
stack.push(16)
stack.push(19)
// console.log(stack.pop())
// console.log(stack.peek());
// console.log(stack.size());
// stack.removemid();
// stack.push("nivedya")
// stack.reverse()
stack.print()
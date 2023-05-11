class Heap{
    constructor(){
        this.heap = []
    }
    getParentIndex(i){
        return Math.floor((i-1)/2)
    }
    getLeftIndex(i){
        return 2*i+1
    }
    getRightIndex(i){
        return 2*i+2
    }
    swap(v1,v2){
        [this.heap[v1],this.heap[v2]]=[this.heap[v2],this.heap[v1]]
    }
    push(value){
        this.heap[this.heap.length] = value
        this.minHeapifyUp()
    }
    minHeapifyUp(){
        let currentIndex = this.heap[this.heap.length-1] 
        while(this.heap[currentIndex]<this.heap[this.getParentIndex(currentIndex)]){
            this.swap(currentIndex,this.getParentIndex(currentIndex))
            currentIndex = this.getParentIndex(currentIndex)
        }
    }
    pop(){
        let maxValue = this.heap[0]
        this.heap[0] = this.heap[this.heap.length-1]
        this.heap.length--
        this.minHeapifyDown(0)
        return maxValue
    }
    minHeapifyDown(i){
        let n = this.heap.length
        let smallest = i
        let left = this.getLeftIndex(i)
        let right = this.getRightIndex(i)

        if(left<n && this.heap[left]<this.heap[smallest]){
            smallest = left
        }
        if(right<n && this.heap[right]<this.heap[smallest]){
            smallest = right
        }
        if(smallest !== i){
            this.swap(i,smallest)
            this.minHeapifyDown(smallest)
        }else{
            return
        }
    }
    remove(value){
        let i=0
        while(this.heap[i] !==value){
            i++
        }
        let removeValue = this.heap[i]
        this.heap[i] = this.heap[this.heap.length-1]
        this.heap.length--
        this.minHeapifyDown(i)
        return removeValue    
    }
}

const heap = new Heap()
heap.push(3)
heap.push(7)
heap.push(5)
heap.push(8)
heap.push(75)
heap.push(32)
heap.push(54)
heap.push(77)
heap.push(76)

console.log(heap.heap.join(','));
heap.pop()
heap.remove(8)
console.log(heap.heap.join(','));

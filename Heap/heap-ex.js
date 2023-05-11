class Heap {
    constructor(){
        this.data = []
    }

    getParentIndex(i){
        return Math.floor((i-1)/2) 
    }

    getLeftChildIndex(i){
        return i*2+1
    }

    getRightChildIndex(i){
        return i*2+2
    }

    swap(v1,v2){
        [this.data[v1],this.data[v2]] = [this.data[v2],this.data[v1]]
    }

    push(val){
        this.data[this.data.length] = val
        this.heapifyUp()
    } 

    heapifyUp(){
        let currentIndex = this.data.length - 1
        while(this.data[currentIndex]<this.data[this.getParentIndex(currentIndex)]){
            this.swap(currentIndex,this.getParentIndex(currentIndex))
            currentIndex = this.getParentIndex(currentIndex)
        }
    }

    pop(){
        let maxValue = this.data[0]
        this.data[0] = this.data[this.data.length -1]
        this.data.length--
        this.heapifyDown() 
        return maxValue
    }

    heapifyDown(val){
        let currentIndex = 0
        if(val){
             currentIndex = val   
        }
       
        while(this.getLeftChildIndex(currentIndex) !=undefined){
            let biggestChild = this.getRightChildIndex(currentIndex)
            if(this.getRightChildIndex(currentIndex) !=undefined &&
                this.data[this.getRightChildIndex(currentIndex)]>this.data[this.getLeftChildIndex(currentIndex)]
            ){
                biggestChild = this.getRightChildIndex(currentIndex)
            }
            if(this.data[currentIndex]<this.data[biggestChild]){
                this.swap(currentIndex,biggestChild)
                currentIndex = biggestChild
            }else{
                return
            }
        }
    }

    peak(){
        return this.data[0]
    }

    remove(val){
        let i = 0
        while(this.data[i]!=val){
            i++  
        }
        let removeValue = this.data[i]
        this.data[i] = this.data[this.data.length -1]
        this.data.length--
        this.minHeapify(i) 
        return removeValue

    }

    minHeapify(i) {
        const n = this.data.length;
        const left = 2 * i + 1;
        const right = 2 * i + 2;
        let smallest = i;
        if (left < n && this.data[left] < this.data[smallest]) {
          smallest = left;
        }
        if (right < n && this.data[right] < this.data[smallest]) {
          smallest = right;
        }
        if (smallest !== i) {
          [this.data[i], this.data[smallest]] = [this.data[smallest], this.data[i]];
          this.minHeapify(smallest);
        }
    }
    maxHeapify(i) {
        const n = this.data.length;
        const left = 2 * i + 1;
        const right = 2 * i + 2;
        let largest = i;
        if (left < n && this.data[left] > this.data[largest]) {
          largest = left;
        }
        if (right < n && this.data[right] > this.data[largest]) {
          largest = right;
        }
        if (largest !== i) {
          [this.data[i], this.data[largest]] = [this.data[largest], this.data[i]];
          this.maxHeapify(largest);
        }
      }
    
}


const heap = new Heap()
heap.push(7)
heap.push(5)
heap.push(3)
heap.push(8)
heap.push(99)
heap.push(32)
heap.push(54)
heap.push(77)
heap.push(76)
heap.push(75)
console.log(heap.data.join(','));
heap.remove(8);
// heap.pop()
console.log("*************");
// console.log((heap.data));
console.log(heap.data.join(','));
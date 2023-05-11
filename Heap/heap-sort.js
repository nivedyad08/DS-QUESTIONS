function heapSort(arr){
    for(let i=Math.floor(arr.length/2)-1;i>=0;i--){
        heapify(arr,i,arr.length)
    }
    for(let i=arr.length-1;i>0;i--){
        [arr[0],arr[i]] = [arr[i],arr[0]]
        heapify(arr,0,i)
    }
    return arr
}

function heapify(arr,parent,n){
    let largest = parent
    let left = 2*parent+1
    let right = 2*parent+2
    if(left<n && arr[left]>arr[largest]){
        largest = left
    }
    if(right<n && arr[right]>arr[largest]){
        largest = right
    }
    if(largest !== parent){
        [arr[largest],arr[parent]] = [arr[parent],arr[largest]]
        heapify(arr,largest,n)
    }
}

let array = [5, 9, 1, 3, 4, 6, 8, 2, 7]
heapSort(array)
console.log(array);
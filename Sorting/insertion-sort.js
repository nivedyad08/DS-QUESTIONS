function insertionSort(arr){
    for(let i=1;i<arr.length;i++){
        let j= i
        while(j>0 && arr[j-1]>arr[j]){
            let temp = arr[j-1]
            arr[j-1] = arr[j]
            arr[j] = temp
            j--
        }
    }
}

const arr = [8,20,-2,4,-6]
insertionSort(arr)
console.log(arr);
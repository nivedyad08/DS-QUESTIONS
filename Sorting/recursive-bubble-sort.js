function bubblesort(a,n){
    let sorted = true
    for(let i=0;i<n;i++){
        if(a[i]>a[i+1]){
            let temp = a[i]
            a[i] = a[i+1]
            a[i+1] = temp
            sorted = false
        }
    }
    if(sorted === false){
        bubblesort(a,n)
    }
}

const arr = [8,20,-2,4,-6]
const n = arr.length
bubblesort(arr,n)
console.log(arr);
// function bubbleSort(arr){
//     let swapped;
//     do{
//         swapped = false
//         for(let i=0;i<arr.length-1;i++){
//             if(arr[i]>arr[i+1]){
//                 let temp = arr[i]
//                 arr[i] = arr[i+1]
//                 arr[i+1] = temp
//                 swapped= true
//             }
//         }
//     }while(swapped)
// }

function bubbleSort(arr){
    for(let i=arr.length-1;i>=0;i--){
        let didSwap = 0
        for(let j=0;j<=i-1;j++){
            if(arr[j]>arr[j+1]){
                let temp = arr[j+1]
                arr[j+1] = arr[j]
                arr[j] = temp
                didSwap = 1
            }
        }
        if(didSwap == 0){
            break;
        }
    }
}

const arr = [13,46,24,52,20,2]
bubbleSort(arr)
console.log(arr);
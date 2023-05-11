var removeDuplicates = function(arr) {
    for(let i=0;i<arr.length;i++){
        for(let j=i+1;j<arr.length;j++){
            if(arr[i]===arr[j]){
                for(let k=j; k<arr.length-1; k++) {
                    arr[k] = arr[k+1];
                }
                arr.length--;
                j--;
            }
        }
    }
    return arr
 };

const arr = [2,3,4,2,5]
console.log(removeDuplicates(arr))
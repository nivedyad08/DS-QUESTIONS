function checkSum(arr,target){
    for(let i=0;i<arr.length-1;i++){
        for(let j=i+1;j<arr.length;j++){
            if(arr[i]+arr[j]==target){
                return ([arr[i],arr[j]])
            }
        }
    }
}

console.log(checkSum([6,5,4,3,9,8,0],7)); 
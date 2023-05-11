function test(arr){
    let sum = 0
    let count =1;
    for(let i=0;i<arr.length;i++){
        if(arr[i]==arr[i+1] ==1){
            count++
            if(sum<count){
                sum=count;
            }
        }else{
            count = 1
        }
    }
    return sum;
}


console.log(test([1,1,0,1,1,1]))
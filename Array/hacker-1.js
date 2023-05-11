function simpleArraySum(ar) {
    let sum = 0
    for(let i=0;i<=ar.length-1;i++){
        console.log(ar.length);
        sum = ar[i]+sum
    }
    return sum

}

console.log(simpleArraySum([5,6,2,3,2]));
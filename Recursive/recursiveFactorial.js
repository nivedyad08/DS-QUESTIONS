// function recursiveFactorial(n) {
//   if (n === 0) {
//     return 1
//   }
//   return n * recursiveFactorial(n - 1);
// }

// console.log(recursiveFactorial(4));
// console.log(recursiveFactorial(5));

let a = 0;
for (let i = 1; i <= 5; i++) {
  a = a + i;
}
// console.log(a);

// function sum(n, total = 0) {
//   if (n <= 0) return total;
//   return sum(n - 1, total + n);
// }

// function rec(n){
//   if(n<=0){
//     return
//   }
//   console.log("nivedya");
//   rec(n-1)
// }
function binarySearch(arr,target){
  search(arr,target,0,arr.length-1)
}

search(arr,target,leftIndex,rightIndex){
  if(leftIndex>rightIndex){
    return -1
  }
  let middleIndex = (leftIndex+rightIndex)/2
  if(target<arr[middleIndex]){
    search(arr,target,0,middleIndex+1)
  }else{
    search(arr,target,middleIndex+1,arr)
  }
}

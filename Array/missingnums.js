function missingnos(arr, size) {
    let num = 1;
    let arr2 = [];
    let flag = 0;
    for (let i = 0; i < size; i++) {
      flag = 0; // reset flag to 0
      for (let j = 0; j < arr.length; j++) {
        if (arr[j] == num) {
          flag = 1;
          break;
        }
      }
      if (flag == 0) {
        arr2.push(num);
      }
      num++;
    }
    console.log(arr2);
    return arr2;
  }
  
  const arr = [1, 3, 5, 6, 8];
  let size = 9;
  missingnos(arr, size);
  
  
  

  


// function missingnos(arr){
//     let arr2=[];
//     for(let i=1;i<arr.length;i++){
//         let flag = 0;  // reset flag to 0
//         for(let j=0;j<arr.length;j++){
//             if(i == arr[j]){
//                 flag = 1;
//                 break;
//             }
//         }
//         if(flag == 0){
//             arr2.push(i)
//         }
//     }
//     return arr2;
// }


// console.log(missingnos([1,1,4,5],5));
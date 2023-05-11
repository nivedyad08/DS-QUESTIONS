//third largest number in the array?

function thirdLargestNum(arr) {
    let first = Number.MIN_VALUE, second = Number.MIN_VALUE, third = Number.MIN_VALUE;
  
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > first) {
        third = second;
        second = first;
        first = arr[i];
      } else if (arr[i] > second) {
        third = second;
        second = arr[i];
      } else if (arr[i] > third) {
        third = arr[i];
      }
    }
  
    return third;
  }
  
//   console.log(thirdLargestNum([5,4,10,7,6])); 
  console.log(thirdLargestNum([3,4,2,1,2,1,1])); 
  
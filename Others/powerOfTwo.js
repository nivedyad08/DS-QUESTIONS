function isBitwisePowerOfTwo(n) {
    if (n < 1) {
      return false;
    }
    return (n & (n-1))===0
  }
  


// function isPowerOfTwo(n) {
//   if (n < 1) {
//     return false;
//   }
//   while (n>1) {
//     if (n % 2 != 0) {
//       return false;
//     }
//     n = n / 2;
//   }
//   return true
// }

// console.log(isPowerOfTwo(1));
// console.log(isPowerOfTwo(2));
// console.log(isPowerOfTwo(5));

console.log(isBitwisePowerOfTwo(1));
console.log(isBitwisePowerOfTwo(2));
console.log(isBitwisePowerOfTwo(5));

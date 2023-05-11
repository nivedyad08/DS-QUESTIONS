const arr = [2, 4, 6, 5, 7];

// arr.push("Divakaran");
// arr.unshift(45);
// arr.pop();
// arr.shift();

// for(const item of arr){
//     console.log(item);
// }

// let newarr = []
// arr.map((item,i) => {
//    return item = item*2;
// });
// console.log(arr);

// const newarr1 = arr.map(item =>item/2)
// console.log('newarr1=> ',newarr1);
// const newarr = arr.map(item =>item/2).filter(item=>item%2==0)
// console.log('multiply=> ',newarr);
const evens = arr.filter((item) => item % 2 === 0);
console.log("evens=> ", evens);

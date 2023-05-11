function compareTriplets(a, b) {
  let result = [0, 0];
  if (a.length === b.length) {
    for (let i = 0; i < a.length; i++) {
      if (a[i] > b[i]) {
        result[0] = result[0] + 1;
      }else if(a[i]<b[i]){
        result[1] = result[1] + 1
      }
    }
    return result;
  } else {
    console.log("error");
  }
}

console.log(compareTriplets([5, 6, 7], [3, 6, 10]));

var removeDuplicates = function(arr) {
    var newarray = arr.filter((item,i,array)=>array.indexOf(item)===i);
    return newarray
};


console.log(removeDuplicates([1,1,2]));
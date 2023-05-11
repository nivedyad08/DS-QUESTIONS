var findMedianSortedArrays = function(nums1, nums2) {
    let arr =[]
    let median;
    arr = nums1.concat(nums2).sort((a, b) => a - b);
    console.log(arr);
    if(arr.length%2==0){
        let m =(arr.length)/2
        median = (arr[m] + arr[m-1])/2
    }else{
        let m =(arr.length-1)/2
        median = arr[m]
    }
    return median;
};

console.log(findMedianSortedArrays([3],[-1,-2]));
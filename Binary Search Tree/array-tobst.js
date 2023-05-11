class Node{
    constructor(value){
        this.value = value
        this.left = null
        this.right =null
    }
}
var root = null
    function sortedArrayToBst(arr){
        traverse(arr,0,arr.length-1)
    }

    function traverse(arr,start,end){
        if(start>end){
            return null
        }
        const mid = Math.floor((start+end)/2)
        let node = new Node(arr[mid])
        node.left = traverse(arr,start,mid-1)
        node.right = traverse(arr,mid+1,end)
        console.log(node);
        return node
    }

    var arr = [1, 2, 3, 4, 5, 6, 7];
    root = sortedArrayToBst(arr);
    console.log(root);
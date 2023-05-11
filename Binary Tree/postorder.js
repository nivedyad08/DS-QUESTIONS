class Node{
    constructor( value){
        this.value =value
        this.left = null
        this.right = null
    }
}

function postOrderTraversal(node){
    const result =[]

    function traverse(node){
        if(node.left){
            traverse(node.left)
        }
        if(node.right){
            traverse(node.right)
        }
        result.push(node.value);
    }
    traverse(root)
    return result;
}

const root = new Node(1)
root.left = new Node(2)
root.right = new Node(3)
root.left.left = new Node(4)
root.left.right = new Node(5)

console.log(postOrderTraversal(root))


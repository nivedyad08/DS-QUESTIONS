class Node{
    constructor( value){
        this.value =value
        this.left = null
        this.right = null
    }
}

function inordertraversal(node){
    const result =[]
    if(node===null){
        return ;
    }

    function traverse(node){
        if(node.left){
            traverse(node.left)
        }
        result.push(node.value)
        if(node.right){
            traverse(node.right)
        }

    }

    traverse(root)
    return result;
}

const root = new Node(1)
root.left = new Node(2)
root.right = new Node(3)
root.left.left = new Node(4)
root.left.right = new Node(5)

console.log(inordertraversal(root))


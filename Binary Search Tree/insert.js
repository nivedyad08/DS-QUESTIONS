class Node{
    constructor(value){
        this.value = value
        this.left = null
        this.right = null
    }
}

class BinarySearchTree{
    constructor(){
        this.root = null
    }
    isEmpty(){
        return this.root===null
    }
    insert(value){
        const newNode = new Node(value)
        if(this.isEmpty()){
            this.root = newNode;
        }else{
            this.insertNode(this.root,newNode)
        }
    }

    insertNode(root,newNode){
        if(newNode.value<root.value){
            if(root.left===null){
                root.left = newNode
            }else{
                this.insertNode(root.left,newNode)
            }
        }else{
            if(root.right===null){
                root.right = newNode
            }else{
                this.insertNode(root.right,newNode)
            }
        }
    }
}

const bst = new BinarySearchTree()
bst.insert(13)
bst.insert(10)
bst.insert(7)
bst.insert(12)
bst.insert(11)
bst.insert(27)
bst.insert(23)
bst.insert(28)
bst.insert(26)
bst.insert(30)
console.log(bst.isEmpty());
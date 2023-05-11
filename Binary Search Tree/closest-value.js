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
        return this.root === null
    }
    insert(value){
        const newNode = new Node(value)
        if(this.isEmpty()){
            this.root = newNode
        }else{
            this.insertNode(this.root,newNode)
        }
    }
    insertNode(root,newNode){
        if(newNode.value<root.value){
            if(root.left === null){
                root.left = newNode
            }else{
                this.insertNode(root.left,newNode)
            }
        }else{
            if(root.right === null){
                root.right = newNode
            }else{
                this.insertNode(root.right,newNode)
            }
        }
    }
    levelOrder(root){
        const queue =[]
        queue.push(root)
        while(queue.length){
            let curr = queue.shift()
            console.log(curr.value);
            if(curr.left){
                queue.push(curr.left)
            }
            if(curr.right){
                queue.push(curr.right)
            }
        }
    }

    closestValue(root,target){
        let closest = root.value
        while(root){
            if(Math.abs(root.value-target)<Math.abs(closest-target)){
                closest =root.value
            }
            if(target<root.value){
                root= root.left
            }else{
                root = root.right
            }
        }
        return closest
    }
}

const bst = new BinarySearchTree()
bst.insert(9)
bst.insert(4)
bst.insert(3)
bst.insert(6)
bst.insert(5)
bst.insert(7)
bst.insert(17)
bst.insert(22)
bst.insert(20)

// bst.levelOrder(bst.root)
console.log(bst.closestValue(bst.root,2));
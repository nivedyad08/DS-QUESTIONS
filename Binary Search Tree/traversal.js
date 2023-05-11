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
        if(newNode.value<this.root){
            if(root.left === null){
                root.left = newNode
            }else{
                this.insertNode(root.left,newNode)
            }
        }else{
            if(root.right=== null){
                root.right = newNode
            }else{
                this.insertNode(root.right,newNode)
            }
        }
    }
    search(root,value){
        if(!root){
            return false
        }
        if(root.value===value){
            return true;
        }else if(value<root.value){
            return this.search(root.left,value)
        }else{
            return this.search(root.right,value)
        }
    }
    preOrder(root){
        if(root != null){
            console.log(root.value);
            this.preOrder(root.left)
            this.preOrder(root.right)
        }
    }
    inOrder(root){
        if(root){
            this.inOrder(root.left)
            console.log(root.value);
            this.inOrder(root.right)
        }
    }
    postOrder(root){
        if(root){
            this.postOrder(root.left)
            this.postOrder(root.right)
            console.log(root.value);
        }
    }

    
    bfs(root) {
        const queue = [];
        queue.push(root);
        while (queue.length) {
          let curr = queue.shift();
          console.log(curr.value);
          if (curr.left) {
            queue.push(curr.left);
          }
          if (curr.right) 
            queue.push(curr.right);
        }
      }
}

const bst = new BinarySearchTree()
// bst.insert(13)
// bst.insert(10)
// bst.insert(7)
// bst.insert(12)
// bst.insert(11)
// bst.insert(27)
// bst.insert(23)
// bst.insert(28)
// bst.insert(22)
// bst.insert(24)
// bst.insert(26)
// bst.insert(30)

bst.insert(70)
bst.insert(30)
bst.insert(20)
bst.insert(10)

console.log(bst.search(bst.root,5));

bst.preOrder(bst.root)
console.log("******************");
bst.inOrder(bst.root)
// bst.postOrder(bst.root)

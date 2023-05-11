class Node {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }
  
  class BinarySearchTree {
    constructor() {
      this.root = null;
    }
    isEmpty() {
      return this.root === null;
    }
    insert(value) {
      const newNode = new Node(value);
      if (this.isEmpty()) {
        this.root = newNode;
      } else {
        this.insertNode(this.root, newNode);
      }
    }
    insertNode(root, newNode) {
        if (newNode.value < root.value) {
          if (root.left === null) {
            root.left = newNode;
          } else {
            this.insertNode(root.left, newNode);
          }
        } else {
          if (root.right === null) {
            root.right = newNode;
          } else {
            this.insertNode(root.right, newNode);
          }
        }
      }
    min(root){
        if(!root.left){
            return root.value
        }else{
           return this.min(root.left)
        }
    }
    max(root){
        if(!root.right){
            return root.value
        }else{
            return this.max(root.right)
        }
    }
    deleteNode(root, value) {
      if (root === null) {
        return root;
      }
      if (value < root.value) {
        root.left = this.deleteNode(root.left, value);
      } else if (value > root.value) {
        root.right = this.deleteNode(root.right, value);
      } else {
        if (!root.left && !root.right) {
          return null;
        }
        if (!root.left) {
          return root.right;
        } else if (!root.right) {
          return root.left;
        }
        root.value = this.min(root.right);
        root.right = this.deleteNode(root.right, root.value);
      }
      return root;
    }
    levelOrder(root) {
      const queue = [];
      queue.push(root);
      while (queue.length) {
        let curr = queue.shift();
        console.log(curr.value);
        if (curr.left) {
          queue.push(curr.left);
        }
        if (curr.right) queue.push(curr.right);
      }
    }
  
  }
  
  const bst = new BinarySearchTree();
  bst.insert(10);
  bst.insert(5);
  bst.insert(3);
  bst.insert(7);
  bst.insert(6);
  bst.insert(15);

  // console.log(bst.min(bst.root))
  // console.log(bst.max(bst.root))

  bst.levelOrder(bst.root)
  console.log("*************");
  bst.deleteNode(bst.root,5);
  bst.levelOrder(bst.root)
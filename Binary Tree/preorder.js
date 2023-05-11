// class TreeNode {
//     constructor(val) {
//       this.val = val;
//       this.left = null;
//       this.right = null;
//     }
//   }
  
//   function preorderTraversal(root) {
//     const result = [];
  
//     function traverse(node) {
//       if (!node) {
//         return;
//       }
  
//       result.push(node.val); // Visit the root node
//       traverse(node.left);   // Traverse the left subtree recursively
//       traverse(node.right);  // Traverse the right subtree recursively
//     }
  
//     traverse(root);
//     return result;
//   }

//   const root = new TreeNode(1);
//   root.left = new TreeNode(2);
//   root.right = new TreeNode(3);
//   root.left.left = new TreeNode(4);
//   root.left.right = new TreeNode(5);
  
//   console.log(preorderTraversal(root));
  


class TreeNode{
    constructor(value){
        this.value = value
        this.left = null
        this.right = null
    }
}

function preorderTraversal(root){
    const result =[]

    function traverse(node){
        if(!node){
            return
        }

        result.push(node.value)
        traverse(node.left)
        traverse(node.right)
    }

    traverse(root)
    return result
}

const root = new TreeNode(1)
root.left =  new TreeNode(2)
root.right =  new TreeNode(3)
root.right.right =  new TreeNode(4)
root.right.right.right =  new TreeNode(5)
root.left.left =  new TreeNode(6)

console.log(preorderTraversal(root));
class Node{
    constructor(value) {
        this.value = value
        this.children = []
    }

    insert(value){
        this.children.push(value)
    }
}

function logNode(node){
    if(!node){
        return
    }
    console.log(node.value);
    for(let i=0;i<node.children.length;i++){
        logNode(node.children[i])
    }
}

const node = new Node(50)
node.insert(new Node(70))
node.insert(new Node(12))
node.insert(new Node(34))
node.insert(new Node(67))
node.insert(new Node(78))

console.log(logNode(node))
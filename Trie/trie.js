class TrieNode{
    constructor(){
        this.children ={}
        this.isEndofWord = false
    }
}

class Trie{
    constructor(){
        this.root = new TrieNode()
    }

    insert(word){
        let current = this.root
        for(let i=0;i<word.length;i++){
            const char = word[i]
            if(!current.children[char]){
                current.children[char] = new TrieNode()
            }
            current = current.children[char]
        }
        current.isEndofWord = true
    }

    search(word){
        let current = this.root
        for(let i=0;i<word.length;i++){
            const char = word[i]
            if(!current.children[char]){
                return false
            }
            current = current.children[char]
        }
        return current.isEndofWord;
    }

    print(){
        let words = []
        let stack = []

        stack.push([this.root,""])
        while(stack.length>0){
            let [node,word] = stack.pop()
            if(node.isEndofWord){
                words.push(word)
            }
            for(let char in node.children){
                stack.push([node.children[char],word+char])
            }
        }
        return words
    }

    getSuggestions(prefix){
        let suggestions =[]
        let current = this.root

        for(let i=0;i<prefix.length;i++){
            const char = prefix[i]
            if(!current.children[char]){
                return suggestions
            }
            current = current.children[char]
        }
        console.log(current);
        let stack = [[current,prefix]]
        while(stack.length>0){
            let [node,word] = stack.pop()
            if(node.isEndofWord){
                suggestions.push(word)
            }
            for(let char in node.children){
                stack.push([node.children[char],word+char])
            }
        }
        return suggestions
    }

    delete(word){
        let current = this.root
        let stack = []

        for(let i=0;i<word.length;i++){
            const char = word[i]
            if(!current.children[char]){
                return false
            }
            stack.push([current,word])
            current = current.children[char]
        }
        if(!current.isEndofWord){
            return false
        }
        current.isEndofWord = false
        if(Object.keys(current.children).length === 0){
            while(stack.length>0){
                let [node,char] = stack.pop()
                delete node.children[char]
                if(Object.keys(node.children.length>0 || node.isEndofWord)){
                    break;
                }
            }
        }
        return true
    }

}

const trie = new Trie()
trie.insert('mobile')
trie.insert('mouse')
trie.insert('computer')
trie.insert('memory')
console.log(trie.getSuggestions('c'));
// console.log(trie.print());
// console.log(trie.delete('memory'));
// console.log(trie.print());
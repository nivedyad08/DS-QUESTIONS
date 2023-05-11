class HashTable {
  constructor(size) {
    this.size = size;
    this.buckets = new Array(size);
    for (let i = 0; i < this.size; i++) {
      this.buckets[i] = new LinkedList();
    }
  }

  hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash += key.charCodeAt(i);
    }
    return hash % this.size;
  }

  set(key, value) {
    const index = this.hash(key);
    const bucket = this.buckets[index];
    const node = bucket.find((node) => node.key === key);
    if (node) {
      node.value = value;
    } else {
      bucket.append({ key, value });
    }
  }

  get(key) {
    const index = this.hash(key);
    const bucket = this.buckets[index];
    const node = bucket.find((node) => node.key === key);
    return node ? node.value : undefined;
  }

  remove(key) {
    const index = this.hash(key);
    const bucket = this.buckets[index];
    const node = bucket.find((node) => node.key === key);
    if (node) {
      bucket.remove(node);
    }
  }
  display(){
    for(let i=0;i<this.buckets.length;i++){
        if(this.buckets[i]){
            console.log(i,this.buckets[i]);
        }
    }
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  append(value) {
    const node = { value, next: null };
    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
  }

  find(callback) {
    let current = this.head;
    while (current) {
      if (callback(current.value)) {
        return current.value;
      }
      current = current.next;
    }
    return null;
  }

  remove(node) {
    if (node === this.head) {
      this.head = node.next;
    } else {
      let current = this.head;
      while (current && current.next !== node) {
        current = current.next;
      }
      if (current) {
        current.next = node.next;
      }
    }
    if (node === this.tail) {
      this.tail = current;
    }
  }
  print() {
    let curr_node = this.head;
    let list = "";
    while (curr_node) {
      list += `${curr_node.value} `;
      curr_node = curr_node.next;
    }
    console.log(list);
  }
}
const hash = new HashTable(10);
hash.set("name","John");
hash.display();

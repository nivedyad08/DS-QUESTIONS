const set = new Set([1,2,3])
set.add(5)
set.delete(3)
console.log(set);
console.log(set.size);
// set.clear()

for(const item of set){
    console.log(item);
}


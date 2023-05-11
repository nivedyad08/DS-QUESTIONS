const map1 = new Map([['a',1],['b',4],['c',9]])
map1.set('d',19)
map1.delete('d',19)
map1.delete('d')
console.log(map1.has('c'));
console.log(map1.has('d'));
console.log(map1.size);

for(const [key,value] of map1){
    console.log(`${key}:${value}`);
}


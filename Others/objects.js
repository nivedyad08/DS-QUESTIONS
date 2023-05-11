const obj ={
    name :'Neethu',
    age:20,
    "key-three":true,
    sayMyName: function(){
        console.log(this.name);
    }
}

console.log(obj.name);
console.log(obj['age']);
console.log(obj['key-three']);
console.log(obj.sayMyName());

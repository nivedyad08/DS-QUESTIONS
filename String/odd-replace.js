const oddReplace = function(str){
    str = str.split("")
    for(let i=0;i<str.length;i++){
        if(i%2===1){
            str[i] = "&"
        }
    }
    return str.join("")
}


console.log(oddReplace("brototype"));
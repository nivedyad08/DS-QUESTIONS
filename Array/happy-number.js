function happyNumber(num) {
    let sum = 0;
    while(num!=0){
        let newNum = num%10;
        sum += newNum*newNum;
        num = Math.floor(num/10);
    }
    if(sum == 1){
        return "Happy"
    }else if(sum>10){
       return happyNumber(sum)
    }else{
        return false
    }
}

console.log(happyNumber(19));

//find a number is single digit or not?

function calculation(a,b,...numbers){
    let sum = 0;
    for(let i of numbers){
        sum += i;
    }
    console.log(sum);
}

calculation(3,4,1,2,4,5,6,7,8);
function factorial(input){
    let num = Number(input[0]);
    let sum = 1;

    for(let i = 1; i <= num; i++){
        sum *= i;
    }

    console.log(sum);
}

factorial(['8']);
function kNumbers(input){
    let num = Number(input[0]);
    let result = 1;

    while(result <= num){
        console.log(result);

        result = result * 2 + 1;
    }
}

kNumbers([31])
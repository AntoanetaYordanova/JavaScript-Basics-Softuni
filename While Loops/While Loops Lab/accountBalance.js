function acountBalance(input){
    let index = 0;
    let sum = input[index];

    let totalSum = 0;

    while(sum !=='NoMoreMoney'){
        if(sum < 0){
            console.log('Invalid operation!');
            break;
        }
        totalSum += Number(sum);
        console.log(`Increase: ${Number(sum).toFixed(2)}`)
        index ++;
        sum = input[index];
        

    }
    console.log(`Total: ${(totalSum).toFixed(2)}`);

}

acountBalance(["120",
"45.55",
"-150"])

function sumOfTwoNumbers(input){
    let firsNum = Number(input[0]);
    let secondNum = Number(input[1]);
    let magicNum = Number(input[2]);
    let counter = 0;
    let isFound = false;

    for(let x = firsNum; x <= secondNum; x++){
        for(let y = firsNum; y <= secondNum; y++){
            counter++;
            if(x + y === magicNum){
                console.log(`Combination N:${counter} (${x} + ${y} = ${magicNum})`);
                isFound = true;
                break;
            }
        }
        if(isFound){
            break;
        }
    }

    if(!isFound){
        console.log(`${counter} combinations - neither equals ${magicNum}`);
    }

}

sumOfTwoNumbers(["88",
"888",
"1000"])
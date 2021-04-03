function equalPairs(input){
    let numberPairs = Number(input[0]);
    let firstNumbers = '';
    let secondNumbers = '';
    
    let numbersToCompare = '';
    let value = 0;
    let maxdiff = 0;
    

    for(let i = 1; i < input.length; i += 2){
        firstNumbers += input[i];
    }

    for(let i = 2; i < input.length; i += 2){
        secondNumbers += input[i];
    }

    for(let i = 0; i <= firstNumbers.length; i++){
        let numberOne = Number(firstNumbers[i]);
        let numberTwo = Number(secondNumbers[i]);
        let isNumberOneNan = isNaN(numberOne);
        let isNumberTwoNan = isNaN(numberTwo);
        
        if(isNumberOneNan === true){
            numberOne = -Math.abs(firstNumbers[i + 1]);
        }
        if(isNumberTwoNan === true){
            numberTwo = -Math.abs(secondNumbers[i + 1]);
        }

         numbersToCompare += number 1


    }
    
    console.log(value);
}

equalPairs([3,
    1,
    2,
    0,
    3,
    4,
    -1
    ])
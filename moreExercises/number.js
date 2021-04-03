function number(input){
    let firstNum = Number(input[0]);
    let secondNum = Number(input[1]);
    let numbers = '';

    for(let i = firstNum; i <= secondNum; i++){
        for(let j = firstNum; j <= secondNum; j++){
            for(let k = firstNum; k <= secondNum; k++){
                for(let l = firstNum; l <= secondNum; l++){
                    if(((i % 2 === 0 && l % 2 !== 0) || (i % 2 !== 0 && l % 2 === 0)) &&
                    i > l && (j + k) % 2 === 0){
                        numbers = numbers + i + j + k + l + ' ';
                    }
                }
            }

        }
    }

    console.log(numbers);
}

number(['3', '5'])
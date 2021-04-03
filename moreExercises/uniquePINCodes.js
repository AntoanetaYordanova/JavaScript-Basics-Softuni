function uniquePinCodes(input){
    let firstNumber = Number(input[0]);
    let secondNumber = Number(input[1]);
    let thirdNumber = Number(input[2]);

    for(let i = 1; i <= firstNumber; i++){
        for(let j = 1; j <= secondNumber; j++){
            for(let k = 1; k <= thirdNumber; k++){
                if(i % 2 === 0 &&
                   ( j === 2 || j === 3 || j === 5 || j === 7) &&
                    k % 2 === 0){
                        console.log(i, j, k);
                    }
            }
        }
    }
}

uniquePinCodes([3,5,5])
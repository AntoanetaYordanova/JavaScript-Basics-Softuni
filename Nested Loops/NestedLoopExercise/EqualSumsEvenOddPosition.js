function equalSumsEvenOddPosition(input){
    let firstNum = Number(input[0]);
    let secondNum = Number(input[1]);
    let finalNumbers = '';

    for(let i = firstNum; i <= secondNum; i++){
        let stringNum = '' + i;
        let oddSum = 0;
        let evenSum = 0;

        for(let j = 0; j < stringNum.length; j++){
            let odd = Number(stringNum[j++]);
            let even= Number(stringNum[j]);
            oddSum += odd;
            evenSum += even;
        }

        if(oddSum === evenSum){
            finalNumbers += i + ' ';
        }

    }

  console.log(finalNumbers);


}

equalSumsEvenOddPosition(["100000",
"100050"])
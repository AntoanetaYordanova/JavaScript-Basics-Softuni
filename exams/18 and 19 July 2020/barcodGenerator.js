function barcodGenerator(input){
    let startNum = String(input[0]);
    let finishNum = String(input[1]);

    let firstNumStart = startNum[0];
    let firstNumFinish = finishNum[0];
    let secondNumStart = startNum[1];
    let secondNumFinish = finishNum[1];
    let thirdNumStart = startNum[2];
    let thirdNumFinish = finishNum[2];
    let fourthNumStart = startNum[3];
    let fourthNumFinish = finishNum[3];

    let allNums = '';

    for(let i = firstNumStart; i <= firstNumFinish; i++){
        for(let j = secondNumStart; j <= secondNumFinish; j++){
            for(let k = thirdNumStart; k <= thirdNumFinish; k++){
                for(let l = fourthNumStart; l <= fourthNumFinish; l++){
                    if(i % 2 !== 0 &&
                        j % 2 !== 0 &&
                        k % 2 !== 0 &&
                        l % 2 !== 0){
                            allNums = allNums + i + j + k + l + ' ';
                        }
                }
            }
        }
    }

    console.log(allNums);
}

barcodGenerator([2345,
    6789])
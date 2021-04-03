function averageNumber(input){
    let index = 0;
    index++
    let numAmount = 0;
    let sumTotal = 0;

    while(index < input.length){
        let currentValue = Number(input[index]);
        numAmount++;
        sumTotal += currentValue;
        index++;
    }

    let averageNum = (sumTotal / numAmount).toFixed(2);

    console.log(averageNum);

}

averageNumber([4,
    95,
    23,
    76,
    23
    ])
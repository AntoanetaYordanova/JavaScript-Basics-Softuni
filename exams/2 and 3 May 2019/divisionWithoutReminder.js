function divisionWithoutReminder(input){
    let numAmount = Number(input[0]);
    let divByTwoCounter = 0;
    let divByThreeCounter = 0;
    let divByFourCounter = 0;

    for(let i = 1; i <= numAmount; i++){
        let currentNumber = Number(input[i]);
    
        if(currentNumber % 2 === 0){
            divByTwoCounter += 1;
        }

        if(currentNumber % 3 === 0){
            divByThreeCounter += 1;
        }

        if(currentNumber % 4 === 0){
            divByFourCounter += 1;
        }
    }

    let divByTwoPercents = (divByTwoCounter * 100 / numAmount).toFixed(2);
    let divByThreePercents = (divByThreeCounter * 100 / numAmount).toFixed(2);
    let divByFourPercents = (divByFourCounter * 100 / numAmount).toFixed(2);

    console.log(`${divByTwoPercents}%`);
    console.log(`${divByThreePercents}%`);
    console.log(`${divByFourPercents}%`);

}

divisionWithoutReminder([10,
    680,
    2,
    600,
    200,
    800,
    799,
    199,
    46,
    128,
    65])
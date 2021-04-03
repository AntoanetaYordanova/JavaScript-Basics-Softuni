function fishingBoat(input){
    let budget = Number(input[0]);
    let season = input[1];
    let fishermanNum = input[2];
    let finalSum = 0;

    switch(season){
        case 'Spring': 
            finalSum = 3000;
            if(fishermanNum <= 6){
                finalSum *= 0.9;
            } else if(fishermanNum <= 11){
                finalSum *= 0.85;
            } else{
                finalSum *= 0.75;
            }
        break;
        case 'Summer':
        case 'Autumn': 
            finalSum = 4200;
            if(fishermanNum <= 6){
                finalSum *= 0.9;
            } else if(fishermanNum <= 11){
                finalSum *= 0.85;
            } else{
                finalSum *= 0.75;
            }
        break;
        case 'Winter':
            finalSum = 2600;
            if(fishermanNum <= 6){
                finalSum *= 0.9;
            } else if(fishermanNum <= 11){
                finalSum *= 0.85;
            } else{
                finalSum *= 0.75;
            }
        break;
    }

    if(fishermanNum % 2 === 0 && season !== 'Autumn'){
        finalSum *= 0.95;
    }

    if(budget >= finalSum){
        let left = budget - finalSum;
        console.log(`Yes! You have ${left.toFixed(2)} leva left.`);
    } else{
        let left = finalSum - budget;
        console.log(`Not enough money! You need ${left.toFixed(2)} leva.`);
    }

}

fishingBoat(["2000", "Winter", "13"])
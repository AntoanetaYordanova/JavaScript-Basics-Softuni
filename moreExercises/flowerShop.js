function bouquetPrice(input){
    let chrysanthemumsAmount = Number(input[0]);
    let rosesAmount = Number(input[1]);
    let tulipsAmount = Number(input[2]);
    let season = input[3];
    let isHolyday = input[4];

    let finalPrice = 0;
    let chrysanthemumsPrice = 0;
    let rosesPrice = 0;
    let tulipsPrice = 0;

    switch(season){
        case 'Spring':
        case 'Summer':
            chrysanthemumsPrice = 2;
            rosesPrice = 4.1;
            tulipsPrice = 2.5;
        break;
        case 'Autumn':
        case 'Winter':
            chrysanthemumsPrice = 3.75;
            rosesPrice = 4.5;
            tulipsPrice = 4.15;
        break;    
    }

    finalPrice = chrysanthemumsPrice * chrysanthemumsAmount + rosesPrice * rosesAmount + tulipsPrice * tulipsAmount;

    if(isHolyday === 'Y'){
        finalPrice *= 1.15;
    }

    if(tulipsAmount > 7 && season === 'Spring'){
        finalPrice *= 0.95;
    } 
    
    if(rosesAmount >= 10 && season === 'Winter'){
        finalPrice *= 0.9;
    } 
    
    if((chrysanthemumsAmount + rosesAmount + tulipsAmount) > 20){
        finalPrice *= 0.8;
    } 

    finalPrice +=2;

    console.log(finalPrice.toFixed(2));
   

}


bouquetPrice([2,
    4,
    8,
    'Spring',
    'Y'])
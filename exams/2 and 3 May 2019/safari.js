function safari(input){
    let budget = Number(input[0]);
    let fuelLitres = Number(input[1]);
    let day = input[2];

    let sum = fuelLitres * 2.1 + 100;
    let finalSum = 0;

    if(day === 'Saturday'){
        finalSum = sum * 0.9;
    } else{
        finalSum = sum * 0.8;
    }

    let difference = (Math.abs(finalSum - budget)).toFixed(2);

    if(budget < finalSum){   
        console.log(`Not enough money! Money needed: ${difference} lv.`);
    } else{
        console.log(`Safari time! Money left: ${difference} lv. `);
    }

}

safari([1000, 10, 'Sunday'])
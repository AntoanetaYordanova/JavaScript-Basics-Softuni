function vetParking(input){
    let daysNum = Number(input[0]);
    let hoursNum = Number(input[1]);

    let total = 0;
    let currentDay = 0;
    let currentSum = 0;

    for(let i = 1; i <= daysNum; i++){
        currentDay += 1;
        
        if(i % 2 === 0){
            for(let j = 1; j <= hoursNum; j++){
                if(j % 2 === 0){
                    currentSum += 1;
                } else if(j % 2 !== 0){
                    currentSum += 2.5;
                }
            }
        } else if(i % 2 !== 0){
            for(let j = 1; j <= hoursNum; j++){
                if(j % 2 === 0){
                    currentSum += 1.25;
                } else if(j % 2 !== 0){
                    currentSum += 1;
                }
            }
        }
        total += currentSum;
        console.log(`Day: ${i} - ${(currentSum).toFixed(2)} leva`);
        currentSum = 0;

    }

    console.log(`Total: ${(total).toFixed(2)} leva`);
}

vetParking(['2', '5'])
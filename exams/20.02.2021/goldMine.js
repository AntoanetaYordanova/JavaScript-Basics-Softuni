function goldMine(input){
    let index = 0;
    let numLocations = Number(input[index++]);

    for(let i = 0; i < numLocations; i++){
        let targetGold = Number(input[index++]);
        let daysNum = Number(input[index++]);
        let goldForTheDays = 0;
        for(let j = 0; j < daysNum; j++){
            let currentValue = Number(input[index++]);
            goldForTheDays += currentValue;
        }

        let averageGold = goldForTheDays / daysNum;

        if(targetGold > averageGold){
            let difference = (targetGold - averageGold).toFixed(2)
            console.log(`You need ${difference} gold.`);
        } else{
            console.log(`Good job! Average gold per day: ${(averageGold).toFixed(2)}.`);
        }
    }

}

// goldMine(['2','10','3','10', '10','11','20','2', '20','10'])

goldMine([ '1', '5', '3', '10', '1', '3' ])
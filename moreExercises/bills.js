function bills(input){
    let monthsNum = Number(input[0]);
    let electricity = 0;
    let water = 0;
    let internet = 0;
    let other = 0;
    let finalSum = 0;

    for(let i = 1; i <= monthsNum; i++){
        
        let totalSum  = 35 + Number(input[i]);
        electricity += Number(input[i]);
        water += 20;
        internet += 15;
        other += totalSum * 1.2;
        finalSum += 35 + Number(input[i]);
    }

    finalSum += other;
    let average = finalSum / monthsNum;
    

    console.log(`Electricity: ${electricity.toFixed(2)} lv`);
    console.log(`Water: ${water.toFixed(2)} lv`);
    console.log(`Internet: ${internet.toFixed(2)} lv`);
    console.log(`Other: ${other.toFixed(2)} lv`);
    console.log(`Average: ${average.toFixed(2)} lv`);

}

bills(['5','68.63','89.25','132.53','93.53','63.22'])
function vacation(input){
    let index = 0;
    let moneyNeeded = Number(input[index]);
    index++;
    let moneySaved = Number(input[index]);
    index++;
    let action = input[index];
    let days = 0;
    let daysSpend = 0;
    

    while(index < input.length){
        days++;
        let currentSum = Number(input[++index]);

        if(action === 'save'){
            daysSpend = 0;
            moneySaved += currentSum;
        } else if(action === 'spend'){
            daysSpend++;
            if(moneySaved < currentSum){
                moneySaved = 0;
            } else(
                moneySaved -= currentSum 
            )
        }

        if(daysSpend === 5){
            console.log(`You can't save the money.`);
            console.log(`${daysSpend}`);
            break;
        }

        index++;
        action = input[index];
    }

    if(moneySaved >= moneyNeeded){
        console.log(`You saved the money for ${days} days.`);
    }
}


vacation(["250",
"150",
"spend",
"50",
"spend",
"50",
"save",
"100",
"save",
"100"])
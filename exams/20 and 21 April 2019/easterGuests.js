function easterGuests(input){
    let guestsAmount = Number(input[0]);
    let budget = Number(input[1]);

    let kozunakAmount = Math.ceil(guestsAmount / 3);
    let eggsAmount = guestsAmount * 2;

    let totalCost = kozunakAmount * 4  + eggsAmount * 0.45;

    if(budget < totalCost){
        let difference = (totalCost - budget).toFixed(2);
        console.log(`Lyubo doesn't have enough money.`);
        console.log(`He needs ${difference} lv. more.`);
    } else{
        let difference = (budget - totalCost).toFixed(2);
        console.log(`Lyubo bought ${kozunakAmount} Easter bread and ${eggsAmount} eggs.`);
        console.log(`He has ${difference} lv. left.`);
    }


}

easterGuests([9 , 12])
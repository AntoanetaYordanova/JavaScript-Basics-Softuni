function budget(input){
    let movieBudget = Number(input[0]);
    let extras = Number(input[1]);
    let costumePrice = Number(input[2]);

    let moneyForDecor = movieBudget * 0.1;
    let moneyForCostumes = extras * costumePrice;
    if(extras > 150){
        moneyForCostumes = moneyForCostumes - moneyForCostumes * 0.1;
    }

    let totalExpences = moneyForCostumes + moneyForDecor;
    
    if(totalExpences <= movieBudget){
        console.log('Action!');
        console.log(`Wingard starts filming with ${(movieBudget - totalExpences).toFixed(2)} leva left.`);
    } else{
        console.log('Not enough money!');
        console.log(`Wingard needs ${(totalExpences - movieBudget).toFixed(2)} leva more.`);
    }

}

budget(["9587.88",
"222",
"55.68"])
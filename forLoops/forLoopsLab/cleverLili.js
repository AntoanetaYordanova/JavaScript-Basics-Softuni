function isEnoughMoney(input1, input2, input3){
    let years = Number(input1);
    let washingMachinePrice = Number(input2);   
    let pricePerToy = Number(input3);

    let moneyFromBirthdays = 0;
    let amountToys = 0;
    let moneyPerYear = 10;

    for(let i = 1; i <= years; i += 2){
        amountToys += 1;
    }

    for(let i = 2; i <= years; i +=2){
        moneyFromBirthdays += moneyPerYear;
        moneyPerYear += 10;
        moneyFromBirthdays -= 1;
    }

    moneyFromBirthdays += amountToys * pricePerToy;

    if(washingMachinePrice <= moneyFromBirthdays){
        let difference = (moneyFromBirthdays - washingMachinePrice).toFixed(2);
        console.log(`Yes! ${difference}`);
    } else{
        let difference = (washingMachinePrice - moneyFromBirthdays).toFixed(2);
        console.log(`No! ${difference}`);
    }

}

isEnoughMoney("21", "1570.98", "3")
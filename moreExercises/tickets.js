function isEnoughMoney(input){
    let budget = Number(input[0]);
    let typeTicket = input[1];
    let amountPeople =  Number(input[2]);
    let moneyForTransport = 0;
    let totalExpences = 0;

    if(amountPeople < 5){
        moneyForTransport = budget * 0.75;
    }   else if(amountPeople < 10){
        moneyForTransport = budget * 0.6;
    }   else if(amountPeople < 24){
        moneyForTransport = budget * 0.5;
    }   else if(amountPeople < 50){
        moneyForTransport = budget * 0.4;
    }   else{
        moneyForTransport = budget * 0.25;
    }

    if(typeTicket === 'VIP'){
        totalExpences = amountPeople * 499.99 + moneyForTransport;
    } else{
        totalExpences = amountPeople * 249.99 + moneyForTransport;
    }

    if(totalExpences > budget){
        let moneyLeft =  (totalExpences - budget).toFixed(2);
        console.log(`Not enough money! You need ${moneyLeft} leva.`);
    } else{
        let moneyLeft = (budget - totalExpences).toFixed(2);
        console.log(`Yes! You have ${moneyLeft} leva left.`);
    }
}

isEnoughMoney([30000,'VIP',49])

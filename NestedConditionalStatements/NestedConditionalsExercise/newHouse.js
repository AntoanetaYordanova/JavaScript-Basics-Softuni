function newHouse(input){
    let flower = input[0];
    let amount = Number(input[1]);
    let budget = Number(input[2]);
    let totalSum = 0;

    switch(flower){
        case 'Roses': 
        totalSum = amount * 5;
        if(amount > 80){
            totalSum *= 0.9;
        }
        break;
        case 'Dahlias': 
        totalSum = amount * 3.8;
        if(amount > 90){
            totalSum *= 0.85;
        }
        break;
        case 'Tulips': 
        totalSum = amount * 2.8;
        if(amount > 80){
            totalSum *= 0.85;
        }
        break;
        case 'Narcissus': 
        totalSum = amount * 3;
        if(amount < 120){
            totalSum * 1.15;
        }
        break;
        case 'Gladiolus': 
        totalSum = amount * 2.5;
        if(amount < 80){
            totalSum *= 1.2;
        }
        break;
    }

    if(budget < totalSum){
        let left = (totalSum - budget).toFixed(2);
        console.log(`Not enough money, you need ${left} leva more.`)
    } else{
        let left = (budget -totalSum).toFixed(2);
        console.log(`Hey, you have a great garden with ${amount} ${flower} and ${left} leva left.`)
    }
}

newHouse(["Tulips","88","260"])
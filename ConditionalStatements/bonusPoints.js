function bonusPoints(input){
    let number = Number(input[0]);
    let bonus = 0;

    if(number < 100){
        bonus =  5;
    } else if(number < 1000){
        bonus = number * 0.2;
    } else{
        bonus =  number * 0.1;
    }
    
    let isOdd = number % 2;
    let endsWith5 = number % 10;

    if(isOdd === 0 ){
        bonus = bonus + 1;
    } else if(endsWith5 === 5){
        bonus = bonus + 2;
    }

    console.log(bonus);
    console.log(bonus + number);
}

bonusPoints(['175']);
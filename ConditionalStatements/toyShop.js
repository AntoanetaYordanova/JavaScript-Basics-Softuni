function sumForExcursion(input){
    let excursionPrice = Number(input[0]);
    let puzzles = Number(input[1]);
    let puppets = Number(input[2]);
    let bears = Number(input[3]);
    let minions = Number(input[4]);
    let cars = Number(input[5]);

    let sum = puzzles * 2.6 + puppets * 3 + bears * 4.1 + minions * 8.2 + cars * 2;
    let toyNumbers = puzzles + puppets + bears + minions + cars;

    if(toyNumbers >= 50){
        sum = sum - (sum * 0.25);
    }
     
    sum = sum - (sum * 0.1);

    if(sum >= excursionPrice){
        console.log(`Yes! ${(sum - excursionPrice).toFixed(2)} lv left.`)
    }   else{
        console.log(`Not enough money! ${(excursionPrice - sum).toFixed(2)} lv needed.`)
    }

}

sumForExcursion(["320", "8", "2", "5", "5", "1"])   
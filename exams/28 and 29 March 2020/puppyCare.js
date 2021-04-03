function puppyCare(input){
    let foodBought = Number(input[0]) * 1000;
    let foodEaten = 0;

    for(let i = 1; i < input.length - 1; i++){
        foodEaten += Number(input[i]);
    }

    if(foodBought >= foodEaten){
        let difference = foodBought - foodEaten;
        console.log(`Food is enough! Leftovers: ${difference} grams.`);
    } else{
        let difference = foodEaten - foodBought;
        console.log(`Food is not enough. You need ${difference} grams more.`);
    }
}

puppyCare([3,
    1000,
    1000,
    1000,
    'Adopted']);
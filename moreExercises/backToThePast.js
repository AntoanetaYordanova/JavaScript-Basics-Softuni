function backToThePast(input){

    let moneyEnharitance = Number(input[0]);
    let year = Number(input[1]);

    let moneySpend = 0;
    let currentAge = 0;

    for(let i = 1800; i <= year; i += 2){
        moneySpend += 12000;
    }

    for(let i = 1801; i <= year; i += 2){
        currentAge = 18 + (i - 1800);
        moneySpend += 12000 + 50 * currentAge;
    }

    if(moneyEnharitance < moneySpend){
        let difference = (moneySpend - moneyEnharitance).toFixed(2);
        console.log(`He will need ${difference} dollars to survive.`);
    } else{
        let difference = (moneyEnharitance - moneySpend).toFixed(2);
        console.log(`Yes! He will live a carefree life and will have ${difference} dollars left.`);
    }

}

backToThePast([100000.15,
    1808])
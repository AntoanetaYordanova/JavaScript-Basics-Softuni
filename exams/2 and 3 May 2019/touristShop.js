function touristShop(input){
    let index = 0;
    let budget = Number(input[index]);
    index++;
    let productsCounter = 0;
    let sum = 0;

    while(index < input.length){
        let currentProduct = input[index];
        if(currentProduct === 'Stop'){
            console.log(`You bought ${productsCounter} products for ${(sum).toFixed(2)} leva.`);
            break;
        }
        productsCounter++;
        let currentPrice = Number(input[++index]);
        if(productsCounter % 3 === 0){
            budget -= currentPrice / 2
            sum += currentPrice / 2;
        } else{
            budget -= currentPrice;
            sum += currentPrice;
        }

        if(budget <= 0){
            budget = Math.abs(budget)
            console.log(`You don't have enough money!`);
            console.log(`You need ${(budget).toFixed(2)} leva!`);
            break;
        }

        index++
    }

    
}

touristShop([54,
    'Thermal underwear',
    24,
    'Sunscreen',
    45
    ])
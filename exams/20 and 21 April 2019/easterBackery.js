function easterBackery(input){
    let priceOfFlour = Number(input[0]);
    let flourKilograms = Number(input[1]);
    let sugarKilograms = Number(input[2]);
    let eggsAmount = Number(input[3]);
    let yastPackets = Number(input[4]);

    let moneyForFlour = priceOfFlour * flourKilograms;
    let priceOfSUgar = priceOfFlour * 0.75;
    let moneyForSugar = priceOfSUgar * sugarKilograms;
    let moneyForEggs = priceOfFlour * 1.1 * eggsAmount;
    let moneyForYeast = priceOfSUgar * 0.2 * yastPackets;

    let totalPrice =( moneyForFlour + moneyForSugar + moneyForEggs + moneyForYeast).toFixed(2);

    console.log(totalPrice);


}

easterBackery([50,10,3.5,6,1,])
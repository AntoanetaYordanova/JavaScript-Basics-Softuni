function logistics(input) {
    let loadNum = Number(input[0]);

    let busTonsPercent = 0;
    let truckTonsPercent = 0;
    let trainTonsPercent = 0;
    let price = 0;
    let totalTons = 0;

    for(let i = 1; i <= loadNum; i++){
        let currentTons = Number(input[i]);
        totalTons += currentTons;
        if(currentTons < 4){
            price += currentTons * 200;
            busTonsPercent += currentTons;
        } else if(currentTons < 12){
            price += currentTons * 175;
            truckTonsPercent += currentTons;
        } else if(currentTons >= 12){
            price += currentTons * 120;
            trainTonsPercent += currentTons;
        }
    }

   

    let averagePrice = price / totalTons;

    console.log((averagePrice).toFixed(2));
    console.log(`${(busTonsPercent / totalTons * 100 ).toFixed(2)}%`);
    console.log(`${(truckTonsPercent / totalTons * 100 ).toFixed(2)}%`);
    console.log(`${(trainTonsPercent / totalTons * 100 ).toFixed(2)}%`);

}
logistics(['4', '1', '5','16','3']);
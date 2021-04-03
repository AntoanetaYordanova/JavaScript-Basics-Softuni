function catFood(input){
    let catsNum = Number(input[0]);
    let smallCatsNum = 0;
    let bigCatsNum = 0;
    let hugeCatsNum = 0;
    let totalFoodAmount = 0;

    for(let i = 1; i <= catsNum; i++){
        let currentValue = Number(input[i]);
        totalFoodAmount += currentValue;
        if(currentValue < 200){
            smallCatsNum++
        } else if(currentValue < 300){
            bigCatsNum++;
        } else{
            hugeCatsNum++;
        }
    }

    let totalPrice = (totalFoodAmount / 1000 * 12.45).toFixed(2);

    console.log(`Group 1: ${smallCatsNum} cats.`);
    console.log(`Group 2: ${bigCatsNum} cats.`);
    console.log(`Group 3: ${hugeCatsNum} cats.`);
    console.log(`Price for food per day: ${totalPrice} lv.`);

}

catFood([6,
    102,
    236,
    123,
    399,
    342,
    222])
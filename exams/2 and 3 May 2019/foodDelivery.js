function foodDelivery(input){
    let ChickenMenus = Number(input[0]);
    let fishMenus = Number(input[1]);
    let vegetarianMenus = Number(input[2]);

    let sum = ChickenMenus * 10.35 + fishMenus * 12.40 + vegetarianMenus * 8.15;

    let desert = sum * 0.2;

    let finalSum = (sum + desert + 2.5).toFixed(2);

    console.log(`Total: ${finalSum}`);
}

foodDelivery(['2', '4', '3'])
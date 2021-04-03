function moneyForCharity(input) {
    let juniors = Number(input[0]);
    let seniors = Number(input[1]);
    let type = input[2];
    let junorTax = 0;
    let seniorTax = 0;

    switch (type) {
        case "trail":
            junorTax = 5.5;
            seniorTax = 7;
            break;
        case "cross-country":
            junorTax = 8;
            seniorTax = 9.5;
            break;
        case "downhill":
            junorTax = 12.25;
            seniorTax = 13.75;
            break;
        case "road":
            junorTax = 20;
            seniorTax = 21.5;
            break;
    }

    let totalMoney = junorTax * juniors + seniorTax * seniors;
    if (juniors + seniors >= 50) {
        totalMoney *= 0.75;
    }
    totalMoney *= 0.95;

    console.log(totalMoney.toFixed(2));
}

moneyForCharity([10,
    10,
    'downhill']);

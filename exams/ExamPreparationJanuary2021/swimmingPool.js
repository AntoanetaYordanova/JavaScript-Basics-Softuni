function swimmingPool(input){
    let peopleNum = Number(input[0]);
    let entrancePrice = Number(input[1]);
    let chairPrice = Number(input[2]);
    let umbrellaPrice = Number(input[3]);

    let moneyForEntrance  = (peopleNum * entrancePrice);
    let moneyForUmbrellas = (Math.ceil(peopleNum / 2)) * umbrellaPrice;
    let moneyForChairs = Math.ceil(peopleNum * 0.75) * chairPrice;

    let totalSum = moneyForChairs + moneyForEntrance + moneyForUmbrellas;

    console.log((totalSum).toFixed(2));
}

swimmingPool([21,
    5.50,
    4.40,
    6.20])
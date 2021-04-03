function club(input) {
    let index = 0;
    let targetSum = Number(input[index++]);
    let isParty = input[index];
    let income = 0;

    while(isParty !== 'Party!' && targetSum >= income){
        let coctail = input[index++];
        let price = String(coctail).length;
        let amount = Number(input[index++]);
        let currentBill = price * amount;

        if(currentBill % 2 === 0){
            income += currentBill;
        } else{
            income += currentBill * 0.75;
        }

        isParty = input[index];
    }

    if(targetSum > income){
        let difference = (Math.abs(targetSum - income)).toFixed(2)
        console.log(`We need ${difference} leva more.`);
    } else{
        console.log(`Target acquired.`);
    }
    console.log(`Club income - ${(income).toFixed(2)} leva.`);
}

club(['100',
    'Sidecar',
    7,
    'Mojito',
    5,
    'White Russian',
    10,
    'Party!'])

// club([ '500', 'Bellini', '6', 'Bamboo', '7', 'Party!' ])
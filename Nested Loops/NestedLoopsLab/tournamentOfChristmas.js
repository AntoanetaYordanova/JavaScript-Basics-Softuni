function tournamentOfChristmas(input){
    let index = 0;
    let days = Number(input[index++]);
    let totalMoney = 0;
    let daysWon = 0;

    for(let i = 1; i <= days; i++){
        let sport = input[index++];
        let moneyForTheDay = 0;
        let wonCounter = 0;
        let loseCounter = 0;

        while(sport !== 'Finish'){
            let winOrLose = input[index];

            if(winOrLose === 'win'){
                moneyForTheDay += 20;
                wonCounter++;
            } else{
                loseCounter++;
            }

            sport = input[++index];
            index++;
        }

        if(wonCounter > loseCounter){
            daysWon++;
            totalMoney += moneyForTheDay * 1.1;
        } else{
            totalMoney += moneyForTheDay;
        }

        
        sport = input[index];
    }

    if(daysWon > days / 2){
        totalMoney = (totalMoney * 1.2).toFixed(2)
        console.log(`You won the tournament! Total raised money: ${totalMoney}`);
    } else{
        console.log(`You lost the tournament! Total raised money: ${(totalMoney).toFixed(2)}`);
    }



    
}

// tournamentOfChristmas(["2",
// "volleyball",
// "win",
// "football",
// "lose",
// "basketball",
// "win",
// "Finish",
// "golf",
// "win",
// "tennis",
// "win",
// "badminton",
// "win",
// "Finish"])

tournamentOfChristmas([
    "3",
    "darts",
    "lose",
    "handball",
    "lose",
    "judo",
    "win",
    "Finish",
    "snooker",
    "lose",
    "swimming",
    "lose",
    "squash",
    "lose",
    "table tennis",
    "win",
    "Finish",
    "volleyball",
    "win",
    "basketball",
    "win",
    "Finish"
])
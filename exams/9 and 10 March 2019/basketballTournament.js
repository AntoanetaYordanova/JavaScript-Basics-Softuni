function basketballTournament(input){
    let index = 0;
    let isEnd = input[index];
    let winCounter = 0;
    let loseCounter = 0;
    let totalMatchesCounter = 0;

    while(isEnd !== 'End of tournaments'){
        let gameName = input[index++];
        let gameNum = Number(input[index++]);
        let gamesCounter = 0;
            while(gamesCounter < gameNum){
                totalMatchesCounter++;
                gamesCounter++;
                let ourPoints = Number(input[index++]);
                let otherPoints = Number(input[index++]);
                if(ourPoints > otherPoints){
                    winCounter++;
                    console.log(`Game ${gamesCounter} of tournament ${gameName}: win with ${Math.abs(ourPoints - otherPoints)} points.`);
                } else{
                    loseCounter++;
                    console.log(`Game ${gamesCounter} of tournament ${gameName}: lost with ${Math.abs(ourPoints - otherPoints)} points.`);
                }

            }

            isEnd = input[index];
            gameName = input[index];
    }

    let percentsWin = (winCounter * 100 / totalMatchesCounter).toFixed(2);
    let percentsLose = (loseCounter * 100 / totalMatchesCounter).toFixed(2);

    console.log(`${percentsWin}% matches win`);
    console.log(`${percentsLose}% matches lost`);

}

// basketballTournament(['Dunkers',
//     2,
//     75,
//     65,
//     56,
//     73,
//     'Fire Girls',
//     3,
//     67,
//     34,
//     83,
//     98,
//     66,
//     45,
//     'End of tournaments'])

basketballTournament(['Ballers',
    3,
    87,
    63,
    56,
    65,
    75,
    64,
    'Sharks',
    4,
    64,
    76,
    65,
    86,
    68,
    99,
    45,
    78,
    'End of tournaments' ])
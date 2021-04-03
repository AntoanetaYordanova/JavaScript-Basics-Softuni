function easterCompetition(input){
    let index = 0;
    let competitorsNum = Number(input[index++]);
    let bestResult = 0;
    let winner = '';

    for(let i = 1; i <= competitorsNum; i++){
        let currentWinner = input[index];
        let currentCompetitor = input[index++];
        let currentPoints = 0;

        while(currentCompetitor !== 'Stop'){
            let currentValue = Number(input[index++]);
            currentPoints += currentValue;
            currentCompetitor = input[index];
        }

        currentCompetitor = input[++index];

        console.log(`${currentWinner} has ${currentPoints} points.`);

        if(currentPoints > bestResult){
            console.log(`${currentWinner} is the new number 1!`);
            bestResult = currentPoints;
            winner = currentWinner;
        }

    }

    console.log(`${winner} won competition with ${bestResult} points!`);
}

easterCompetition(["3",
"Chef Manchev",
"10",
"10",
"10",
"10",
"Stop",
"Natalie",
"8",
"2",
"9",
"Stop",
"George",
"9",
"2",
"4",
"2",
"Stop"])
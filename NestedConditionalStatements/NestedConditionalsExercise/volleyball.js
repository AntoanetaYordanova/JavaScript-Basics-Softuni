function volleyball(input){
    let isLeap = input[0];
    let holydays = Number(input[1]);
    let weekendsHome =  Number(input[2]);
    let weekendsSofia = 48 - weekendsHome;

    weekendsSofia = weekendsSofia / 4 * 3;
    let totalGames = weekendsSofia + weekendsHome;
    holydays = holydays / 3 * 2;
    totalGames += holydays;
    
    if(isLeap === 'leap'){
        totalGames *= 1.15;
    }
    
    console.log(Math.floor(totalGames));
}

volleyball(["normal", "3", "2"])
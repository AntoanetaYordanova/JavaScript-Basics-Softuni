function intervalsGame(input){
    let numbersAmount = Number(input[0]);
    let upToNine = 0;
    let upToNineteen = 0;
    let upToTwentyNine = 0;
    let upToThirtyNine = 0;
    let upToFifty = 0;
    let unvalidNumber = 0;
    let totalScore = 0;

    for(let i = 1; i <= numbersAmount; i++){
        let currentNumber = Number(input[i]);
        
        if(currentNumber >= 0 && currentNumber < 10){
            upToNine += 1;
            totalScore += currentNumber * 0.2;
        } else if(currentNumber >= 10 && currentNumber < 20){
            upToNineteen++;
            totalScore += currentNumber * 0.3;
        } else if(currentNumber >= 20 && currentNumber < 30){
            upToTwentyNine++;
            totalScore += currentNumber * 0.4;
        } else if(currentNumber >= 30 && currentNumber < 40){
            upToThirtyNine++;
            totalScore += 50;
        } else if(currentNumber >= 40 && currentNumber <= 50){
            upToFifty++;
            totalScore += 100;
        } else{
            unvalidNumber++;
            totalScore /= 2;
        }
    }

    upToNine = upToNine * 100 / numbersAmount;
    upToNineteen *= 100 / numbersAmount ;
    upToTwentyNine *= 100 / numbersAmount ;
    upToThirtyNine *= 100 / numbersAmount ;
    upToFifty *= 100 / numbersAmount ;
    unvalidNumber *= 100 / numbersAmount ;

    console.log(totalScore.toFixed(2));
    console.log(`From 0 to 9: ${upToNine.toFixed(2)}%`);
    console.log(`From 10 to 19: ${upToNineteen.toFixed(2)}%`);
    console.log(`From 20 to 29: ${upToTwentyNine.toFixed(2)}%`);
    console.log(`From 30 to 39: ${upToThirtyNine.toFixed(2)}%`);
    console.log(`From 40 to 50: ${upToFifty.toFixed(2)}%`);
    console.log(`Invalid numbers: ${unvalidNumber.toFixed(2)}%`);
    

}

intervalsGame(['10','43','57','-12','23','12','0','50','40','30','20'])
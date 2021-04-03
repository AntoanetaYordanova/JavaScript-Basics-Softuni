function divideWithoutRemainder (input){
    let numbersAmount = Number(input[0]);

    let p1 = 0;
    let p2 = 0;
    let p3 = 0;

    for(let i = 1; i <= numbersAmount; i++){
        let currentNumber = Number(input[i]);

        if(currentNumber % 2 === 0){
            p1++;
        } 
        if(currentNumber % 3 === 0){
            p2++;
        }
        if(currentNumber % 4 === 0){
            p3++
        }
    }

    console.log(`${(p1 * 100 / numbersAmount).toFixed(2)}%`);
    console.log(`${(p2 * 100 / numbersAmount).toFixed(2)}%`);
    console.log(`${(p3 * 100 / numbersAmount).toFixed(2)}%`);

}

divideWithoutRemainder(["10","680","2","600","200","800","799","199","46","128",
"65"])
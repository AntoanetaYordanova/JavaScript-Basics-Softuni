function histogram(input){
    let numbersAmount = Number(input[0]);
    let p1 = 0;
    let p2 = 0;
    let p3 = 0;
    let p4 = 0;
    let p5 = 0;

    for(let i = 1; i <= numbersAmount; i++){
        let currentNumber = Number(input[i]);
        if(currentNumber < 200){
            p1++;
        } else if(currentNumber < 400){
            p2++;
        } else if(currentNumber < 600 ){
            p3++;
        } else if(currentNumber < 800){
            p4++;
        } else{
            p5++;
        }
    }

    console.log(`${(p1 * 100 / numbersAmount).toFixed(2)}%`);
    console.log(`${(p2 * 100 / numbersAmount).toFixed(2)}%`);
    console.log(`${(p3 * 100 / numbersAmount).toFixed(2)}%`);
    console.log(`${(p4 * 100 / numbersAmount).toFixed(2)}%`);
    console.log(`${(p5 * 100 / numbersAmount).toFixed(2)}%`);

}

histogram(["7",
"800",
"801",
"250",
"199",
"399",
"599",
"799"])
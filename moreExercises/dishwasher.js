function dishwasher(input){
    let index = 0;
    let bottlesNum = Number(input[index]);
    index++;
    let totalDetergent = bottlesNum * 750;
    let platesNum = 0;
    let potsNum = 0;
    let isEnd = input[index];
    let counter = 0;

    while(isEnd !== 'End' ){
        counter++;
        let temporaryValue = Number(input[index]);
        if(counter % 3 === 0){
            potsNum += temporaryValue;
            totalDetergent -= temporaryValue * 15;
        } else{
            totalDetergent -= temporaryValue * 5;
            platesNum += temporaryValue;   
        }


        if(totalDetergent <= 0){
            console.log(`Not enough detergent, ${Math.abs(totalDetergent)} ml. more necessary!`);
            break;
        }


        index++
        isEnd = input[index];

    }

    if(isEnd === 'End'){
        console.log('Detergent was enough!');
        console.log(`${platesNum} dishes and ${potsNum} pots were washed.`);
        console.log(`Leftover detergent ${totalDetergent} ml.`);
    }
}

dishwasher([1,
    10,
    15,
    10,
    12,
    13,
    30])
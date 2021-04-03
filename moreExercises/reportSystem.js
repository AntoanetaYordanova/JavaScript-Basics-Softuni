function reportSystem(input){
    let index = 0;
    let sumNeeded = Number(input[index]);
    index++;
    let csCounter = 0;
    let ccCounter = 0;
    let csSum = 0;
    let ccSum = 0;

    while(index < input.length){
        
        let temporaryValueCS = Number(input[index]);
        let isEndOne = input[index];
        let temporaryValueCC = Number(input[++index]);
        let isEndTwo = input[index];

        if(isEndOne === 'End' || isEndTwo === 'End'){
            console.log('Failed to collect required money for charity.'); 
            break;
         }

        if(temporaryValueCS > 100){
            console.log('Error in transaction!');
        } else{
            csCounter++;
            csSum += temporaryValueCS;
            console.log('Product sold!');
            sumNeeded -= temporaryValueCS;
        }

        if(temporaryValueCC < 10){
            console.log('Error in transaction!');
        } else{
            ccCounter++;
            ccSum += temporaryValueCC;
            console.log('Product sold!');
            sumNeeded -= temporaryValueCC;
        }

        if(sumNeeded <= 0){
            let averageCS = (csSum / csCounter).toFixed(2);
            let averageCC = (ccSum / ccCounter).toFixed(2);

            console.log(`Average CS: ${averageCS}`);
            console.log(`Average CC: ${averageCC}`);
            break;
        }

        

        index++;
    }

}

reportSystem([600,
    86,
    150,
    98,
    227,
    'End'])
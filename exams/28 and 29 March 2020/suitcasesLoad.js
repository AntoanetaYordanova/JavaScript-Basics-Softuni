function suitcasesLoad(input){
    let index = 0;
    let totalSpace = Number(input[index]);
    let isEnd = input[index++];
    let suitcasesCounter = 0;

    while(isEnd !== 'End'){
        let currentValue = Number(input[index++]);
        
        if(suitcasesCounter % 3 === 0){
            totalSpace -= currentValue * 1.1;
        }else{
            totalSpace -= currentValue; 
        }
        
        if(totalSpace <= 0){
            console.log('No more space!');
            break;
        }
        suitcasesCounter++;
        isEnd = input[index];
    }
    if(isEnd === 'End'){
        console.log('Congratulations! All suitcases are loaded!'); 
    
}

console.log(`Statistic: ${suitcasesCounter} suitcases loaded.`);
}

suitcasesLoad([700.5,
    180,
    340.6,
    126,
    220])
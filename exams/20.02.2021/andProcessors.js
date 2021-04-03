function andProcessors(input){
    let targetNumProcessors = Number(input[0]);
    let peopleNum = Number(input[1]);
    let workingDays = Number(input[2]);
    let totalHours = workingDays * 8 * peopleNum;
    let processorsMade = Math.floor(totalHours / 3);
    let difference = (Math.abs((processorsMade - targetNumProcessors) * 110.1)).toFixed(2)
    if(targetNumProcessors <= processorsMade){
        console.log(`Profit: -> ${difference} BGN`);
    } else{
        console.log(`Losses: -> ${difference} BGN`);
    }

}

andProcessors([ '500', '8', '20' ])
// andProcessors([ '150', '7', '18' ])
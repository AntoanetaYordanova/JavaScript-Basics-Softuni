function maxNumber(input){
    let index = 0;
    let largestNumber = Number(input[index]);
    let isStop = '';
    index++;

    while(isStop !== 'Stop'){
        let currentNum = Number(input[index]);
        isStop = input[index];

        if(currentNum > largestNumber){
            largestNumber = currentNum;
        }
        index++;
    }

    console.log(largestNumber);

}

maxNumber(["-10",
"20",
"-30",
"Stop"])

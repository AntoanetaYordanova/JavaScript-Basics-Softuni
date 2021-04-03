function minNumber(input){
    let index = 0;
    let smallestNumber = Number(input[index]);
    let isStop = input[index];
    index++;

    while(isStop !== 'Stop'){
        let currentNum = Number(input[index]);

        if(currentNum < smallestNumber){
            smallestNumber = currentNum;
        }

        isStop = input[index];
        index++;
    }

    console.log(smallestNumber);
}

minNumber(["100",
"99",
"80",
"70",
"Stop"])

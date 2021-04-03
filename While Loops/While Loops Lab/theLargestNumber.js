function maxNumber(input){
    let index = 0;
    let currentNum = input[index];
  
    let finalNumber = currentNum;

    while(currentNum !== 'Stop'){
        if(currentNum > finalNumber){
            finalNumber = currentNum;
        }

        index++;
        currentNum = input[index];

    }

    console.log(finalNumber);

}

maxNumber(["-1",
"-2",
"Stop"])

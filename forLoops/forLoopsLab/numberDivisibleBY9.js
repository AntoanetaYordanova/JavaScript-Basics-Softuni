function divisibleByNine(input){
    let firstNumber = Number(input[0]);
    let secondNumber = Number(input[1]);
    let sum = 0;
    let outputNumbers = '';

    for(let i = firstNumber; i <= secondNumber; i++){
        if(i % 9 === 0){
            sum +=i;
            outputNumbers +=i + '\n';
        }
       
    }
    console.log(`The sum: ${sum}`);
    console.log(outputNumbers);
}

divisibleByNine(["100", "200"]);
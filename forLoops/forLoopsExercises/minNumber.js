function minNumber(input){
    let numbersAmount = Number(input[0]);
    let minimumNumber = Number(input[1]);

    for(let i = 2; i <= numbersAmount; i++){
        let currentNumber = Number(input[i]);

        if(currentNumber < minimumNumber){
            minimumNumber = currentNumber;
        }

    }

     console.log(minimumNumber);

}

minNumber(["4",
"45",
"-20",
"7",
"99"]
)
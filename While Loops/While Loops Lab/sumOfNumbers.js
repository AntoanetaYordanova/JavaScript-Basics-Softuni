function sumOfNumbers(input){
    let index = 0;
    let num = Number(input[index]);
    index++;
    let sum = 0;
    
    while(sum < num){
        let currentNum = Number(input[index]);
        sum += currentNum;
        index++;
    }

    console.log(sum);
}

sumOfNumbers(["100",
"10",
"20",
"30",
"40"])
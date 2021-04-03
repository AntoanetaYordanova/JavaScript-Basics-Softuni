function sumOfNumbers(input){
    let number = String(input[0]);
    let totalSum = 0;
    for(let i = 0; i < number.length; i++){
        totalSum += Number(number[i]);
    }

    console.log(`The sum of the digits is:${totalSum}`);
}

sumOfNumbers(["564891"]);


/*function sumOfNumbers(input){
    let number = Number(input[0]);
    let totalSum = 0;
    for(let i = 0; i < number.length; i++){
    
        let HHHH = Number(number[i]);
        totalSum += HHHH;
    }
    console.log(`The sum of the digits is: ${totalSum}`);
}

sumOfNumbers(['1234'])*/

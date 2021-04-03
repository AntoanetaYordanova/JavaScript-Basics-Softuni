function primeOrNotPrime(input){
    
    let primeSum = 0;
    let nonPrimeSum = 0;
    

    for(let i = 0; i < input.length - 1; i++){
        let num = Number(input[i]);
        let isPrime = true;
        if(num < 0){
            console.log('Number is negative.');
        }

        else{
            for(let j = 2; j < num; j++){
                if(num % j === 0){
                    nonPrimeSum += num;
                    isPrime = false;
                } 
            }
            if(isPrime){
                primeSum += num;
            }
        }

    }

    console.log(`Sum of all prime numbers is: ${primeSum}`);
    console.log(`Sum of all non prime numbers is: ${nonPrimeSum}`);

}


primeOrNotPrime(["3",
"9",
"0",
"7",
"19",
"4",
"stop"])
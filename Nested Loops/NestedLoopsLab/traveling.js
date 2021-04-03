function traveling(input){
    let index = 0;
    let destination = input[index];
   

    while(destination != 'End'){
        index++;
        let neededSum = Number(input[index]);
        index++;
        let currentSum = Number(input[index]);
        let savedSum = 0;
        while(true){
            savedSum += currentSum;
            if(savedSum >= neededSum){
                console.log(`Going to ${destination}!`);
                currentSum = 0;
                break;
            }
            index++;
            currentSum = Number(input[index]);

            
        }

    
        index++;
        destination = input[index];
    }

}

traveling(["France",
"2000",
"300",
"300",
"200",
"400",
"190",
"258",
"360",
"Portugal",
"1450",
"400",
"400",
"200",
"300",
"300",
"Egypt",
"1900",
"1000",
"280",
"300",
"500",
"End"])


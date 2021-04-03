function mobileOperator(input){
    let numYears = input[0];
    let type = input[1];
    let internet = input[2];
    let numMonths = Number(input[3]);

    let sum = 0;
    let tax = 0;

    switch(numYears){
        case 'one': 
            switch(type){
                case 'Small': sum = numMonths * 9.98;
                    tax = 9.98;
                break;
                case 'Middle': sum = numMonths * 18.99; 
                    tax = 18.99;
                break;
                case 'Large': sum = numMonths * 25.98; 
                    tax = 25.98; 
                break;
                case 'ExtraLarge': sum = numMonths * 35.99; 
                    tax = 35.99;
                break;
            }
        break;
        case 'two': 
        switch(type){
            case 'Small': sum = numMonths * 8.58; 
                tax = 8.58;
            break;
            case 'Middle': sum = numMonths * 17.09; 
                tax = 17.09;
            break;
            case 'Large': sum = numMonths * 23.59; 
                tax = 23.59;
            break;
            case 'ExtraLarge': sum = numMonths * 31.79; 
                tax = 31.79; 
            break;
        }
        break;
    }

    if(internet === 'yes'){
        if(tax > 30){
            sum += numMonths * 3.85;
        } else if(tax > 10){
            sum += numMonths * 4.35;
        } else{
            sum += numMonths * 5.5;
        }
    }

    if(numYears === 'two'){
        sum = sum - (sum * 0.0375);
    } 

        console.log(`${(sum).toFixed(2)} lv.`);
}

mobileOperator(['two',
    'Large',
    'no',
    10])
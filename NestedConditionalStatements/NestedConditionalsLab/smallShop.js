function smallShops(input){
    let product = input[0];
    let city = input[1];
    let amount = Number(input[2]);
    let finalPrice = 0;

    switch(product){
        case 'coffee': 
        switch(city){
            case 'Sofia': 
            finalPrice = amount * 0.50; break;
            case 'Plovdiv':
            finalPrice = amount * 0.40; break;
            case 'Varna':
            finalPrice = amount * 0.45; break;
        } break;
        case 'water':
            switch(city){
                case 'Sofia': 
                finalPrice = amount * 0.8; break;
                case 'Plovdiv':
                finalPrice = amount * 0.7; break;
                case 'Varna':
                finalPrice = amount * 0.7; break;
            } break;
        case 'beer':
            switch(city){
                case 'Sofia': 
                finalPrice = amount * 1.2; break;
                case 'Plovdiv':
                finalPrice = amount * 1.15; break;
                case 'Varna':
                finalPrice = amount * 1.1; break;
            } break;
        case 'sweets':
            switch(city){
                case 'Sofia': 
                finalPrice = amount * 1.45; break;
                case 'Plovdiv':
                finalPrice = amount * 1.3; break;
                case 'Varna':
                finalPrice = amount * 1.35; break;
            } break;
        case 'peanuts':
            switch(city){
                case 'Sofia': 
                finalPrice = amount * 1.6; break;
                case 'Plovdiv':
                finalPrice = amount * 1.5; break;
                case 'Varna':
                finalPrice = amount * 1.55; break;
            } break;
    }

    console.log(finalPrice);
}

smallShops(["beer",
"Sofia",
"6"])

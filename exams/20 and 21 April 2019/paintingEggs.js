function paintingEggs(input){
    let eggSize = input[0];
    let eggColor = input[1];
    let amount = Number(input[2]);

    let price = 0;

    switch(eggColor){
        case 'Red': 
            switch(eggSize){
                case 'Large': price = 16; break;
                case 'Medium': price = 13; break;
                case 'Small': price = 9; break
            }
        break;
        case 'Green':  
        switch(eggSize){
            case 'Large': price = 12; break;
            case 'Medium': price = 9; break;
            case 'Small': price = 8; break
        }
    break;
        case 'Yellow': 
        switch(eggSize){
            case 'Large': price = 9;break;
            case 'Medium': price = 7;break;
            case 'Small': price = 5;break
        }
    break;
    }

    let totalPrice = ((price * amount) * 0.65).toFixed(2);

    console.log(`${totalPrice} leva.`);
}

paintingEggs(['Small',
    'Yellow',
    3])
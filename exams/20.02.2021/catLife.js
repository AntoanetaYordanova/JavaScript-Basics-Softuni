function catLife(input){
    let breed = input[0];
    let gender = input[1];
    let catMonths = 0;
    let isInvalidCat = false;

    switch(breed){
        case 'British Shorthair': 
            switch(gender){
                case 'm': 
                catMonths = 13 * 12 / 6;
                break;
                case 'f': 
                catMonths = 14 * 12 / 6;
                break;
            }
        break;
        case 'Siamese': 
        switch(gender){
            case 'm': 
            catMonths = 15 * 12 / 6;
            break;
            case 'f': 
            catMonths = 16 * 12 / 6;
            break;
        }
        break;
        case 'Persian': 
        switch(gender){
            case 'm': 
            catMonths = 14 * 12 / 6;
            break;
            case 'f': 
            catMonths = 15 * 12 / 6;
            break;
        }
        break;
        case 'Ragdoll': 
        switch(gender){
            case 'm': 
            catMonths = 16 * 12 / 6;
            break;
            case 'f': 
            catMonths = 17 * 12 / 6;
            break;
        }
        break;
        case 'American Shorthair': 
        switch(gender){
            case 'm': 
            catMonths = 12 * 12 / 6;
            break;
            case 'f': 
            catMonths = 13 * 12 / 6;
            break;
        }
        break;
        case 'Siberian':
            switch(gender){
                case 'm': 
                catMonths = 11 * 12 / 6;
                break;
                case 'f': 
                catMonths = 12 * 12 / 6;
                break;
            }    
        break;
        default:
            isInvalidCat = true;
            console.log(`${breed} is invalid cat!`);
        break;

    }
    if(!isInvalidCat){
    console.log(`${Math.floor(catMonths)} cat months`);
}
}

// catLife(['Persian', 'm'])

catLife([ 'tom', 'f', '', '' ])
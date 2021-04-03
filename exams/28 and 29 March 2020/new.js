function alumin(input) {
    let numberOfJoinery = Number(input[0]);
    let kindOfAlumins = String(input[1]);
    let wayOfDelivery = String(input[2]);
    let price = 0;
 
switch (kindOfAlumins) {
 
    case '90X130':
        if (numberOfJoinery < 10){
            console.log ('Invalid order');
        }break;
        price = numberOfJoinery * 110;
        if (numberOfJoinery >= 30 && numberOfJoinery < 60) {
            price = price - (price * 0.05);
        } else if (numberOfJoinery >= 60) {
            price = price - (price * 0.08);
        } break;
    
        case '100X150':
        if (numberOfJoinery < 10){
                console.log ('Invalid order');
        } break;
        price = numberOfJoinery * 140;
        if (numberOfJoinery >= 40 && numberOfJoinery < 80) {
            price = price - (price * 0.06);
        } else if (numberOfJoinery >= 80) {
            price = price - (price * 0.1);
        } break;
    
    case '130X180':
        if (numberOfJoinery < 10){
            console.log ('Invalid order');
        } break;
 
        price = numberOfJoinery * 190;
        if (numberOfJoinery >= 20 && numberOfJoinery < 50) {
            price = price - (price * 0.07);
        } else if (numberOfJoinery > 50) {
            price = price - (price * 0.12);
        } break;
 
    case '200X300':
        if (numberOfJoinery < 10){
            console.log ('Invalid order');
        }break; 
        price = numberOfJoinery * 250;
        if (numberOfJoinery >= 25 && numberOfJoinery < 50) {
            price = price - (price * 0.09);
        } else if (numberOfJoinery > 50) {
            price = price - (price * 0.14);
        } break;
 
} if (wayOfDelivery === 'With delivery') {
    price = ((price + 60).toFixed(2));
    if (numberOfJoinery > 99) {
        price = price - (price * 0.04);
        console.log(`${price.toFixed(2)} BGN`);
    } else {
        console.log(`${price.toFixed(2)} BGN`);
    }
} else if (wayOfDelivery === 'Without delivery') {
    if (numberOfJoinery > 99) {
        let price = price - (price * 0.04);
        console.log(`${price.toFixed(2)} BGN`);
    } else {
        console.log(`${price.toFixed(2)} BGN`);
    }
 
} 
}
 
    
 
 
alumin(['2', '130X180', 'With delivery']);
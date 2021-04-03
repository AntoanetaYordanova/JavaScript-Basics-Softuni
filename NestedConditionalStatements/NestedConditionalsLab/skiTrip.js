function skiTrip(input){
    let days = Number(input[0]);
    let room = input[1];
    let rating = input[2];
    let nights = days - 1;
    let price = 0;

    switch(room){
        case 'room for one person':
        price = nights * 18;
        break;
        case 'apartment':
            price = nights * 25;
            if(nights < 10){
             price = price - price * 0.3;  
            } else if(nights < 15){
                price = price - price * 0.35;
            } else{
                price = price - price * 0.5;
            }
            break;
        case 'president apartment':
            price = nights * 35;
            if(nights < 10){
                price = price - price * 0.1;  
               } else if(nights < 15){
                   price = price - price * 0.15;
               } else{
                   price = price - price * 0.2;
               }
            break;
    }

    switch(rating){
        case 'positive': price = price + price * 0.25; break;
        default: price = price - price * 0.1; break;
    }
    console.log(price.toFixed(2))
}

skiTrip(["30",
"president apartment",
"negative"])
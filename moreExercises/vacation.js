function vacation(input){
    let budget = Number(input[0]);
    let season = input[1];

    let location = '';
    let price = 0;
    let sleepingSpot = '';

    if(budget <= 1000){
        sleepingSpot = 'Camp';

        switch(season){
            case 'Summer': 
                location = 'Alaska'
                price = budget * 0.65;
            break;
            case 'Winter': 
                location = 'Morocco'
                price = budget * 0.45;
            break;
        }

    } else if(budget <= 3000){
        sleepingSpot = 'Hut';

        switch(season){
            case 'Summer': 
                location = 'Alaska';
                price = budget * 0.8;
            break;
            case 'Winter': 
                location = 'Morocco';
                price = budget * 0.6;
            break;
        }

    } else if(budget > 3000){
        sleepingSpot = 'Hotel';
        price = budget * 0.9;

        switch(season){
            case 'Summer': 
            location = 'Alaska';
            break;
            case 'Winter':
                location = 'Morocco';    
            break;
        }

    }

    console.log(`${location} - ${sleepingSpot} - ${price.toFixed(2)}`)

}

vacation([799.50, 'Winter']);
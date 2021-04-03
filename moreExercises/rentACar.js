function rentACar(input){
    let budget = Number(input[0]);
    let season = input[1];

    let carType = '';
    let classType = '';
    let finalPrice = 0;

    if(budget <= 100){
        classType = 'Economy class';

        switch(season){
            case 'Summer': 
                carType = 'Cabrio'
                finalPrice = budget * 0.35;
            break;
            case 'Winter': 
                carType = 'Jeep'
                finalPrice = budget * 0.65
            break;
        }

    } else if(budget <= 500){
        classType = 'Compact class';

        switch(season){
            case 'Summer':
                carType = 'Cabrio'
                finalPrice = budget * 0.45;
            break;
            case 'Winter': 
                carType = 'Jeep'
                finalPrice = budget * 0.8;
            break;
        }

    } else if(budget > 500){
        classType = 'Luxury class';
        finalPrice = budget * 0.9;
        carType = 'Jeep';

    }

    console.log(classType);
    console.log(`${carType} - ${finalPrice.toFixed(2)}`);

}

rentACar([450, 'Winter']);
function journey(input){
    let budget = Number(input[0]);
    let season = input[1];
    let finalAmount = 0;
    let type = '';
    let where = '';

    if(budget <= 100){
        where = 'Bulgaria';
        if(season === 'summer'){
            type = 'Camp'; 
            finalAmount = budget * 0.3;          
        }else{
            type = 'Hotel';
            finalAmount = budget * 0.7;
        }
    } else if(budget <= 1000){
        where = 'Balkans';
        if(season === 'summer'){
            type = 'Camp';   
            finalAmount = budget * 0.4;        
        }else{
            type = 'Hotel';
            finalAmount = budget * 0.8;
        }
    } else if(budget > 1000){
        where = 'Europe';
        type = 'Hotel';
        if(season === 'summer'){
            finalAmount = budget * 0.9;           
        }else{
            finalAmount = budget * 0.9;
        }
    }

    console.log(`Somewhere in ${where}`);
    console.log(`${type} - ${finalAmount.toFixed(2)}`);

}

journey(["312", "summer"])

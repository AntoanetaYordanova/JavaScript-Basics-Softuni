function cents(input){
    let index = 0;
    let sum = Number(input[index]);
    sum *= 100;
    let centsNum = 0;


    while(sum > 0){
        
        if(sum >= 200){
         centsNum += Math.floor(sum / 200);
         sum %= 200;  
        }
        if(sum >= 100){
         centsNum += Math.floor(sum / 100);
         sum  %= 100;  
        }
        if(sum >= 50){
         centsNum += Math.floor(sum / 50);
         sum  %= 50;
        }
        if(sum >= 20){
            centsNum += Math.floor(sum / 20);
            sum  %= 20;
        }
        if(sum >= 10){
            centsNum += Math.floor(sum / 10);
            sum  %= 10;
        }
        if(sum >= 5){
            centsNum += Math.floor(sum / 5);
            sum  %= 5;
        }
        if(sum >= 2){
            centsNum += Math.floor(sum / 2);
            sum  %= 2;
        }
        if(sum >= 1){
            centsNum += Math.floor(sum / 1);
            sum = 0;
        }
        
    }

    console.log(centsNum);
}

cents([0])
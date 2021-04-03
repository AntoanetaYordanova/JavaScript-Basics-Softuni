function metricConverter(input){
    let number = Number(input[0]);
    let inputMetric = input[1];
    let outputMetric = input[2];
    let converted = 0;

    if (inputMetric === 'mm'){
        if(outputMetric === 'cm' ){
            converted = number / 10;
        } else if(outputMetric === 'm'){
            converted = number / 1000;
        }
     } else if(inputMetric === 'cm'){
         if(outputMetric === 'mm'){
             converted = number * 10;
         } else{
             converted = number / 100;
         }
     } else{
         if(outputMetric === 'mm'){
             converted = number * 1000;
         } else{
             converted = number * 100;
         }
     }

   console.log(converted.toFixed(3));
}

metricConverter(["150","m","cm"])
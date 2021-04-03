function onTime(input){
    let examHour = Number(input[0]);
    let examMinutes = Number(input[1]);
    let arrivalHour = Number(input[2]);
    let arrivalMinutes = Number(input[3]);

    let examTime = examHour * 60 + examMinutes;
    let arrivalTime = arrivalHour * 60 + arrivalMinutes;
    let differenceHours = 0;
    let differenceMinutes = 0;
    let difference = 0;

    if(examTime < arrivalTime){
        console.log('Late');
        difference = arrivalTime - examTime;
        if(difference < 60){
            console.log(`${difference} minutes after the start`);
        }else{
            differenceHours = Math.floor(difference / 60);
            differenceMinutes = difference % 60;
            if(differenceMinutes < 10){
                console.log(`${differenceHours} : 0${differenceMinutes} hours after the start`);
            } else{
                console.log(`${differenceHours} : ${differenceMinutes} hours after the start`);
            }
        }
    } else if(examTime >= arrivalTime && examTime - arrivalTime <= 30){
        console.log('On time');
        difference = examTime - arrivalTime;
        if(difference < 60 && difference !== 0){
            console.log(`${difference} minutes before the start`);
        } else{
            differenceHours = Math.floor(difference / 60);
            differenceMinutes = difference % 60;
            if(differenceMinutes < 10){
                console.log(`${differenceHours} : 0${differenceMinutes} hours before the start`);
            } else{
                console.log(`${differenceHours} : ${differenceMinutes} hours before the start`);
            }
        }
    } else{
        console.log('Early');
        difference = examTime - arrivalTime;
        if(difference < 60){
            console.log(`${difference} minutes before the start`);
        } else{
            differenceHours = Math.floor(difference / 60);
            differenceMinutes = difference % 60;
            if(differenceMinutes < 10){
                console.log(`${differenceHours} : 0${differenceMinutes} hours before the start`);
            } else{
                console.log(`${differenceHours} : ${differenceMinutes} hours before the start`);
            } 
        }
    }
   
}

onTime(["9",
"00",
"8",
"30"])
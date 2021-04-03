function clock(){
    for(let hour = 0; hour <= 23; hour++){
        for(let minute = 0; minute <= 59; minute++){
            console.log(`${hour}:${minute}`);
        }
    }

}

clock();
function record(input){
    let currentRecord = Number(input[0]);
    let distance = Number(input[1]);
    let distanceForMeter = Number(input[2]);

    let newTime = distance * distanceForMeter;
    let delay = Math.floor(distance / 15) * 12.5;
    newTime += delay;
    
    if(newTime < currentRecord){
        console.log(` Yes, he succeeded! The new world record is ${newTime.toFixed(2)} seconds.`);
    }   else{
        console.log(`No, he failed! He was ${(newTime - currentRecord).toFixed(2)} seconds slower.`);
    }

}

record(["10464","1500","20"])
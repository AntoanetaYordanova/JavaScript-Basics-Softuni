function sumSeconds(input){
    let totalTime = Number(input[0]) + Number(input[1]) + Number(input[2]);

    let minutes = Math.floor(totalTime / 60);
    let seconds = totalTime % 60;

    if(seconds < 10){
        
        console.log(`${minutes}:0${seconds}`);
    } else{
        console.log(`${minutes}:${seconds}`);
    }
   

}

sumSeconds(["50","50","49"])

function steps(input){
    let index = 0;
    let goal = 10000;
    
    while(index < input.length){
        let currentSteps = Number(input[index]);
        let isGoingHome = input[index];
        index++;

        if(isGoingHome === 'Going home'){
            goal -= Number(input[index]);
        } else{
            goal -= currentSteps;
        }

       
    }

    if(goal <= 0){
        console.log(`Goal reached! Good job!`);
        console.log(`${Math.abs(goal)} steps over the goal!`);
    } else{
        console.log(`${goal} more steps to reach goal.`);
    }
}


steps(["1500",
"300",
"2500",
"3000",
"Going home",
"200"])

function fitnessCenter(input){
    let totalVisitors = Number(input[0]);

    let back = 0;
    let chest = 0;
    let legs = 0;
    let abs = 0;
    let proteinShake = 0;
    let proteinBar = 0;
    let protein = 0;
    let training = 0;

    for(let i = 1; i <= totalVisitors; i++){
        let currentValue = input[i];
        switch(currentValue){
            case 'Back': 
            back++;
            training++;
            break;
            case 'Chest': 
            chest++;
            training++;
            break;
            case 'Legs': 
            legs++;
            training++;
            break;
            case 'Abs': 
            abs++;
            training++;
            break;
            case 'Protein shake': 
            proteinShake++;
            protein++;
            break;
            case 'Protein bar': 
            proteinBar++;
            protein++;
            break;
            }
    }

    let proteinPercent = (protein / totalVisitors * 100).toFixed(2);
    let trainingPercent = (training / totalVisitors * 100).toFixed(2);

    console.log(`${back} - back`);
    console.log(`${chest} - chest`);
    console.log(`${legs} - legs`);
    console.log(`${abs} - abs`);
    console.log(`${proteinShake} - protein shake`);
    console.log(`${proteinBar} - protein bar`);
    console.log(`${trainingPercent}% - work out`);
    console.log(`${proteinPercent}% - protein`);

}

fitnessCenter([7,
    'Chest',
    'Back',
    'Legs',
    'Legs',
    'Abs',
    'Protein shake',
    'Protein bar',
    
    ])
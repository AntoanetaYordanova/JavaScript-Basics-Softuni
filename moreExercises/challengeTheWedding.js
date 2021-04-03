function challengeTheWedding(input){
    let menNum = Number(input[0]);
    let womenNum = Number(input[1]);
    let tablesNum = Number(input[2]);
    let isFinished = false;
    let allDates = '';

    for(let i = 1; i <= menNum; i++){
        for(let j = 1; j <= womenNum; j++){
           
            if(tablesNum <= 0){
                tablesNum = true;
                break;
            }
            tablesNum--;
            allDates = allDates + `(${i} <-> ${j}) `
        }
        if(tablesNum === true){
            break;
        }
    }
    console.log(allDates);
}

challengeTheWedding(['2','2','3'])
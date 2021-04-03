function combinations(input){
    let combinationNum = Number(input[0]);
    let validCombinations = 0;

    for(let x1 = 0; x1 <= combinationNum; x1++){
        for(let x2 = 0; x2 <= combinationNum; x2++){
            for(let x3 = 0; x3 <= combinationNum; x3++){
                if(x1 + x2 + x3 === combinationNum){
                    validCombinations++;
                }
            }
        }
    }

    console.log(validCombinations);

}

combinations(['25']);
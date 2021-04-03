function giftsFromSanta(input){
    let firstNum = Number(input[0]);
    let secondNum = Number(input[1]);
    let scipNum = Number(input[2]);
    let allNums = '';

    for(let i = secondNum; i >= firstNum; i--){
        if(i % 2 === 0 && i % 3 === 0){
            if(i === scipNum){
                break;
            } else{
                allNums = allNums + i + ' ';
            }
        }
    }
    console.log(allNums);
}

giftsFromSanta([ '1', '36', '12' ])
function numberPyramid(input){
    let num = Number(input[0]);

    let currentNum = 1;
    let isBreak = false;

    for(let i = 1; i <= num; i++){
        let rowNum = '';
        for(let j = 1; j <= i; j++){
            rowNum += currentNum + ' ';
            
            if(currentNum >= num){
                isBreak = true;
                break;
            }
            currentNum++;
        }
        console.log(rowNum);
        if(isBreak){
            break;
        }


    }
}
numberPyramid(["12"])
function specialNumbers(input){
    let num = Number(input[0]);
    let specialNums = '';
 
    for(let  i = 1; i <= 9; i++){
        for(let j = 1; j <= 9; j++){
            for(let k = 1; k <= 9; k++){
                for(let l = 1; l <= 9; l++){
                    if(num % i === 0 && num % j === 0 && num % k === 0 && num % l === 0){
                        specialNums += `${i}${j}${k}${l} `
                    }
                }
            }
        }
 
    }
 
    console.log(specialNums);
}
specialNumbers(["3"])
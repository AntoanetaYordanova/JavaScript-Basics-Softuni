function cake(input){
    let index = 0;
    let l = Number(input[index]);
    index++;
    let w = Number(input[index]);
    index++;
    let cakeSize = l * w;

    while(cakeSize > 0){
        let currentPieces = Number(input[index]);
        let isStop = input[index];
        if(isStop === 'STOP'){
            console.log(`${cakeSize} pieces are left.`);
            break;
        } else{
            cakeSize -= currentPieces;
        }

        index++;

    }

    if(cakeSize < 0){
        console.log(`No more cake left! You need ${Math.abs(cakeSize)} pieces more.`);
    }
}

cake(["10",
"2",
"2",
"4",
"6",
"STOP"])
function footballLeague(input){
    let totalFreeSpaces = Number(input[0]);
    let totalFans = Number(input[1]);
    let fansA = 0;
    let fansB = 0;
    let fansV = 0;
    let fansG = 0;

    for(let i = 2; i <= totalFans + 1; i++){
        let currentFan = input[i];
       switch(currentFan){
           case 'A': fansA++; break;
           case 'B': fansB++; break;
           case 'V': fansV++; break;
           case 'G': fansG++; break;
       }
    }
  
    console.log(`${(fansA * 100 / totalFans).toFixed(2)}%`);
    console.log(`${(fansB * 100 / totalFans).toFixed(2)}%`);
    console.log(`${(fansV * 100 / totalFans).toFixed(2)}%`);
    console.log(`${(fansG * 100 / totalFans).toFixed(2)}%`);
    console.log(`${(totalFans * 100 / totalFreeSpaces).toFixed(2)}%`);
    
}

footballLeague([93,
    16,
    'A',
    'V',
    'G',
    'G',
    'B',
    'B',
    'G',
    'B',
    'A',
    'B',
    'B',
    'B',
    'A',
    'B',
    'B',
    'A',
    ])
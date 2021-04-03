function moving(input){
    let index = 0;
    let w = Number(input[index]);
    index++;
    let l = Number(input[index]);
    index++;
    let h = Number(input[index]);
    index++;
    let totalSpace = w * l * h;
    let isDone = (input[index]);

    
    while(isDone !== 'Done'){
       
        let currentBoxes = Number(input[index]);
        totalSpace -= currentBoxes;
        if(totalSpace <= 0){
            console.log(`No more free space! You need ${Math.abs(totalSpace)} Cubic meters more.`);
            break;
        } 
        
        index++;
        isDone = input[index];
    }

    if(totalSpace > 0){
        console.log(`${totalSpace} Cubic meters left.`);
    }
}


moving(["10", 
"10",
"2",
"20",
"20",
"20",
"20",
"122"])
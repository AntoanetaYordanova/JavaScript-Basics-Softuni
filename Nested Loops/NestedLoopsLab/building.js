function building(input){
    let floors = Number(input[0]);
    let rooms = Number(input[1]);


    for(let i = floors; i >= 1; i--){
        let currentFloor = '';
        for(let j = 0; j < rooms; j++){
            if(i === floors){
                currentFloor += 'L' + i + j + ' ';
            } else if(i % 2 === 0){
                currentFloor += 'O' + i + j + ' ';
            } else if(i % 2 !== 0){
                currentFloor += 'A' + i + j + ' ';
            }

        }
        console.log(currentFloor);
    }

}

building(["6", "4"]);

// building(["9", "5"])

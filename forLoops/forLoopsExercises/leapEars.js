function leapEars(input){
    let firstYear = Number(input[0]);
    let secondYear = Number(input[1]);

    for(let i = firstYear; i <= secondYear; i += 4){
        console.log(i);
    }

}

leapEars(["2000",
"2011"])
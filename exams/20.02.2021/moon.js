function moon(input){
    let kmPerHour = Number(input[0]);
    let litres = Number(input[1]);
    let distance = 768800;

    let totalTime = Math.ceil(distance / kmPerHour) + 3;
    let totalLitres = distance * litres / 100;

    console.log(totalTime);
    console.log(totalLitres);
}

moon([ '10000', '5' ])
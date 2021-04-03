function areaOfFigures(input){
    let figure = input[0];
    let area = 0;

    if(figure === 'square'){
        let a = Number(input[1]);
        area = a * a;
    } else if(figure === 'rectangle'){
        let a = Number(input[1]);
        let b = Number(input[2]);
        area = a * b;
    } else if (figure === 'circle'){
        let r = Number(input[1]);
        area = Math.PI * r * r;
    } else{
        let a = Number(input[1]);
        let h = Number(input[2]);
        area = a / 2 * h;
    }


 console.log(area.toFixed(3));
}

areaOfFigures(['triangle', '4.5', '20'])

//square, rectangle, circle или triangle
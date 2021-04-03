function grades(input){

    let studentsAmount = Number(input[0]);
    let gradeTwo = 0;
    let gradeThree = 0;
    let gradeFour = 0;
    let gradeFive = 0;
    let totalGrade = 0;

    for(let i = 1; i <= studentsAmount; i++){
        let currentGrade = Number(input[i]);
        totalGrade += currentGrade;
        if(currentGrade < 3){
            gradeTwo++;
        } else if(currentGrade < 4){
            gradeThree++;
        } else if(currentGrade < 5){
            gradeFour++;
        } else{
            gradeFive++;
        }
    }

    gradeTwo *= 100 /studentsAmount;
    gradeThree *= 100 /studentsAmount;
    gradeFour *= 100 /studentsAmount;
    gradeFive *= 100 /studentsAmount;

    let averageGrade = (totalGrade / studentsAmount).toFixed(2);

    console.log(`Top students: ${gradeFive.toFixed(2)}%`); 
    console.log(`Between 4.00 and 4.99: ${gradeFour.toFixed(2)}%`);
    console.log(`Between 3.00 and 3.99: ${gradeThree.toFixed(2)}%`);
    console.log(`Fail: ${gradeTwo.toFixed(2)}%`);
    console.log(`Average: ${averageGrade}`)

}

grades(['10','3.00','2.99', '5.68','3.01', '4','4','6.00','4.50','2.44','5'])
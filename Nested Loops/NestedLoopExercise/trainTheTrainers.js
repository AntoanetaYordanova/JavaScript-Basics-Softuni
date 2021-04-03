function trainTheTrainers(input){
    let index = 0;
    let gradesNum = Number(input[index++]);
    let exercise = input[index];
    let gradesCounter = 0;
    let grade = 0;
    
    while(exercise !== 'Finish'){
        index++;
        let currentGrade = Number(input[index]);
        let counter = 0;
        let gradeForTheExercise = 0;
        while(counter < gradesNum){
            counter++;
            gradesCounter++;
            grade += currentGrade;
            gradeForTheExercise +=currentGrade;
            index++;
            currentGrade = Number(input[index]);

        }
        let averageGrade = (gradeForTheExercise / gradesNum).toFixed(2);
        console.log(`${exercise} - ${averageGrade}.`);
        exercise = input[index];
    }

    let totalAverageGrade = (grade / gradesCounter).toFixed(2);
    console.log(`Student's final assessment is ${totalAverageGrade}.`);
       

    }



trainTheTrainers(["3",
"Arrays",
"4.53",
"5.23",
"5.00",
"Lists",
"5.83",
"6.00",
"5.42",
"Finish"])
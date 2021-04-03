function examPreparation(input){
    let index = 0;
    let howManyLowGrades = Number(input[index]);
    index++;
    let currentExercise = input[index];
    let averageScore = 0;
    let numOfProblems  = 0;
    let lastExercise = '';
    let currentScore = 0;
    let lowGrade = 0;

    while(currentExercise !== 'Enough'){ 
        
        lastExercise = input[index];
        currentScore = Number(input[++index]);
        averageScore += currentScore;
        numOfProblems++;
        if(currentScore <= 4){
            lowGrade++;
        }
        if(lowGrade === howManyLowGrades){
            console.log(`You need a break, ${howManyLowGrades} poor grades.`);
            break;
        }
        
        index++;
        currentExercise = input[index];
        
    }

     if(currentExercise === 'Enough'){
         averageScore = (averageScore / numOfProblems).toFixed(2);
         console.log(`Average score: ${averageScore}`);
         console.log(`Number of problems: ${numOfProblems}`);
         console.log(`Last problem: ${lastExercise}`);
     }   



}

examPreparation(["3",
"Money",
"6",
"Story",
"4",
"Spring Time",
"5",
"Bus",
"6",
"Enough"])
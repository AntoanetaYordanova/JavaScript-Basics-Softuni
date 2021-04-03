function scholarship(input){
    let income = Number(input[0]);
    let grade = Number(input[1]);
    let minimumIncome = Number(input[2]);

    let socialScholarship = 0;
    let gradeScholarship = 0;

    if(income < minimumIncome && grade > 4.5) {
        socialScholarship = Math.floor(minimumIncome * 0.35);
    }

    if(grade >= 5.5){
        gradeScholarship = Math.floor(grade * 25);
    }

    if(gradeScholarship === 0 && socialScholarship === 0){
        console.log('You cannot get a scholarship!');
    } else if(gradeScholarship > socialScholarship){
        console.log(`You get a scholarship for excellent results ${gradeScholarship} BGN`);
    } else if(socialScholarship > gradeScholarship){
        console.log(`You get a Social scholarship ${socialScholarship} BGN`);
    }
}

scholarship(["300.00","5.65","420.00"])
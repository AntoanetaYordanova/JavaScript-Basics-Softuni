function hospital(input){

    let treatedPatients = 0;
    let doctors = 7;
    let untreatedPatients = 0;
    let totalDays = Number(input[0]);

    for(let i = 1; i <= totalDays; i++){
        let patientsForTheDay = Number(input[i]);

        if( i % 3 === 0 && untreatedPatients > treatedPatients){
            doctors += 1;
        }
        
        if(patientsForTheDay <= doctors){
            treatedPatients += patientsForTheDay;
        } else{
            treatedPatients += doctors;
            untreatedPatients += patientsForTheDay - doctors;
        }
    }

   

    console.log(`Treated patients: ${treatedPatients}.`);
    console.log(`Untreated patients: ${untreatedPatients}.`);

}

hospital([3,
    7,
    7,
    7]);
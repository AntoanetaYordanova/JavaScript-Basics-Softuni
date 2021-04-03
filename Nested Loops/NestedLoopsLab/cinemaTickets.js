function cinemaTickets(input){
    let index = 0;
    let movie = input[index];

    let totalTickets = 0;
    let studentTickets = 0;
    let standartTickets = 0;
    let kidTickets = 0;

    while(movie !== 'Finish'){
        index++;
        let freeSpaces = Number(input[index++]);
        let ticketType = input[index];
        let seatsTaken = 0;

        while(ticketType !== 'End'){
            // console.log(movie);
            // console.log(ticketType);
            totalTickets++;
            seatsTaken++;
            

            switch(ticketType){
                case 'student': studentTickets++ ; break;
                case 'kid': kidTickets++; break;
                case 'standard': standartTickets++; break;
            }


            if(seatsTaken >= freeSpaces){
                break;
            }

            ticketType = input[++index];
        }
        let percetnsSeatsTaken = (seatsTaken * 100 / freeSpaces).toFixed(2);
        console.log(`${movie} - ${percetnsSeatsTaken}% full.`);

        index++;
        movie = input[index];
    }

    let percentsStudentsTickets = (studentTickets * 100 / totalTickets).toFixed(2);
    let percentStandartTickets = (standartTickets * 100 / totalTickets).toFixed(2);
    let percentKidTickets = (kidTickets * 100 / totalTickets).toFixed(2)

    console.log(`Total tickets: ${totalTickets}`);
    console.log(`${percentsStudentsTickets}% student tickets.`);
    console.log((`${percentStandartTickets}% standard tickets.`));
    console.log(`${percentKidTickets}% kids tickets.`);
}

// cinemaTickets(["Taxi",
// "10",
// "standard",
// "kid",
// "student",
// "student",
// "standard",
// "standard",
// "End",
// "Scary Movie",
// "6",
// "student",
// "student",
// "student",
// "student",
// "student",
// "student",
// "Finish"])

cinemaTickets(["The Matrix",
"20",
"student",
"standard",
"kid",
"kid",
"student",
"student",
"standard",
"student",
"End",
"The Green Mile",
"17",
"student",
"standard",
"standard",
"student",
"standard",
"student",
"End",
"Amadeus",
"3",
"standard",
"standard",
"standard",
"Finish"])

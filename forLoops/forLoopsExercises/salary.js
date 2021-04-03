function salary(input){
    let salaryAmount = input[1];

    for(let i = 2; i <= input.length; i++){
        let tab = input[i];
        switch(tab){
            case 'Facebook': salaryAmount -= 150; break;
            case 'Instagram': salaryAmount -= 100; break;
            case 'Reddit': salaryAmount -= 100; break;
        }

    }

    if(salaryAmount <= 0){
        console.log(`You have lost your salary.`);
    } else{
        console.log(salaryAmount);
    }
 
}

salary(["10","750","Facebook","Dev.bg","Instagram","Facebook","Reddit","Facebook",
"Facebook"]);
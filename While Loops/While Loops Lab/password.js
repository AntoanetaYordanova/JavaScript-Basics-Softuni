function password(input){
    let index = 0;
    let username = input[index];
    index++;
    let pass = input[index];
    index++;
    let data = input[index];
    

    while(pass !== data){
        index++
        data = input[index];
        
    }

    console.log(`Welcome ${username}!`);

}

password(["Nakov",
"1234",
"Pass",
"1324",
"1234"])
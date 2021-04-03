function countTheWords(input){
    let sentence = input[0];
    let counter = 1;

    for(let i = 0; i <= sentence.length; i++){
        if(sentence[i] === ' '){
            counter += 1;
        }
    }

    if(counter <= 10){
       console.log('The message was send successfully!'); 
    } else{
        console.log(`The message is too long to be send! Has ${counter} words.`);
    }

}

countTheWords(["This message has ten words and you can send it!"]
)
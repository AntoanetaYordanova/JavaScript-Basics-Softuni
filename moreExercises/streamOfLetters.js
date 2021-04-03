function streamOfLetters(input){
   let index = 0;
   let oCunter = 0;
   let nCounter = 0;
   let cCounter = 0;
   let word = '';
   let phrase = '';

    
   while(index < input.length){
       let currentValue = input[index];

       if(currentValue >= 'A' && currentValue <= 'Z' || currentValue >= 'a' && currentValue <= 'z'){
            if(currentValue === 'o' && oCunter < 1){
                oCunter++;
            } else if(currentValue === 'n' && nCounter < 1){
                nCounter++;
            } else if(currentValue === 'c' && cCounter < 1){
                cCounter++;
            } else{
                word += currentValue;
            }

            if(oCunter === 1 && nCounter === 1 && cCounter === 1){
                phrase += word + ' ';
                word = '';
                oCunter = 0;
                cCounter = 0;
                nCounter = 0;
            }
       }

       index++;
   }

   console.log(phrase)

}

streamOfLetters(['H',
    'n',
    'e',
    'l',
    'l',
    'o',
    'o',
    'c',
    't',
    'c',
    'h',
    'o',
    'e',
    'r',
    'e',
    'n',
    'e',
    'End'])
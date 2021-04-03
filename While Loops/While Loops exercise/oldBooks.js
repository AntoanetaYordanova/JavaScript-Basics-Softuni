function oldBooks(input){
    let index = 0;
    let targetBook = input[index];
    index++;
    let currentBook = input[index];
    index++;
    let bookCounter = 0;

    while(true){
       
       
        if(currentBook === targetBook){
            console.log(`You checked ${bookCounter} books and found it.`);
            break
        } else if(currentBook === 'No More Books'){
            console.log('The book you search is not here!');
            console.log(`You checked ${bookCounter} books.`);
            break;
        }
        currentBook = input[index];
        index++
        bookCounter++;
    }


}

oldBooks(["Troy",
"Stronger",
"Life Style",
"Troy"])
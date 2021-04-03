function oldBooks(input){
    let index = 0;
    let targetBook = input[index];
    index++;
    let currentBook = input[index];
    let bookCounter = 0;

    while(currentBook !== 'No More Books'){
       if(currentBook === targetBook){
         console.log(`You checked ${bookCounter} books and found it.`); 
         break; 
       } 

       bookCounter++;
       index++;
       currentBook = input[index];
    }

    if(currentBook === 'No More Books'){
        console.log('The book you search is not here!');
        console.log(`You checked ${bookCounter} books.`);
    }
}

oldBooks(["The Spot",
"Hunger Games",
"Harry Potter",
"Torronto",
"Spotify",
"No More Books"])
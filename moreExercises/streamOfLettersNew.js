function streamOfLetters(input) {
 
 
    index = 0;
    let command = input[index];
    index++;
    let word = "";
    let phrase = "";
    countC = 0;
    countN = 0;
    countO = 0;
 
    while (command !== "End") {
        let currentLetter = command;
 
        if ((currentLetter >= "A" && currentLetter <= "Z") || (currentLetter >= "a" && currentLetter <= "z")) {
 
            if (currentLetter === "c" && countC < 1) {
                countC++;
            } else if (currentLetter === "o" && countO < 1) {
                countO++;
            } else if (currentLetter === "n" && countN < 1) {
                countN++;
            } else {
                word += currentLetter;
            }
 
            if (countC === 1 && countN === 1 && countO === 1) {
                phrase += word + " ";
                word = "";
                countC = 0;
                countN = 0;
                countO = 0;
            }
 
        }
        command = input[index++];
 
    }
    console.log(phrase);
}
 
streamOfLetters(["H", "n", "e", "l", "l", "o", "o", "c", "t", "c", "h", "o", "e", "r", "e", "n", "e", "End"])
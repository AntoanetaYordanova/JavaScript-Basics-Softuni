function letterCombination(input) {
    let firstLetter = input[0];
    let secondLetter = input[1];
    let missLetter = input[2];
    let alpha = "abcdefghijklmnopqrstuvwxyz"
    let counter = 0;
    let combinations = ""
 
    for (let i = 0; i < alpha.length; i++) {
        for (let j = 0; j < alpha.length; j++) {
            for (let k = 0; k < alpha.length; k++) {
 
                let current1 = alpha[i];
                let current2 = alpha[j];
                let current3 = alpha[k];
 
                if ((current1 >= firstLetter && current1 <= secondLetter && current1 !== missLetter) &&
                    (current2 >= firstLetter && current2 <= secondLetter && current2 !== missLetter) &&
                    (current3 >= firstLetter && current3 <= secondLetter && current3 !== missLetter)) {
                    counter++
                    combinations += `${current1}${current2}${current3} `;
                }
            }
        }
    }
    console.log(`${combinations}${counter}`);
}

letterCombination('a', 'c', 'b')
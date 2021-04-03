function hightJump(input) {
    let hightToJump = Number(input[0]);
    let startedHeght = hightToJump - 30;
    let jumpscounter = 0;
    let faild = 0;
 
    for (let i = 1; i <= input.length; i++) {
        let currentJump = Number(input[i]);
        jumpscounter++;
 
 
       if(currentJump <= startedHeght){
            faild++;
            if (faild === 3) {
                console.log(`Tihomir failed at ${currentJump}cm after ${jumpscounter} jumps.`);
                break;
            }
        }else if (currentJump > startedHeght) {
            faild = 0;
            startedHeght += 5;
        }
        if (currentJump > hightToJump) {
            console.log(`Tihomir succeeded, he jumped over ${startedHeght}cm after ${jumpscounter} jumps.`);
            break;
        } 
    }
}




hightJump([231,
    205,
    212,
    213,
    228,
    229,
    230,
    235
    ])
function highJumps(input){
    let index = 0;
    let targetHight = Number(input[index++]);
    let currentHight = targetHight - 30;
    let jump = Number(input[index]);
    let jumpCounter = 0;
    let failedJumpsCounter = 0;

   while(index < input.length){
       jumpCounter++;
       if(jump > targetHight){
           console.log(`Tihomir succeeded, he jumped over ${currentHight}cm after ${jumpCounter} jumps.`);
           break;
       }
      if(jump > currentHight){
          currentHight += 5;
          failedJumpsCounter = 0;
      } else {
          failedJumpsCounter++;
      }

      if(failedJumpsCounter === 3){
          console.log(`Tihomir failed at ${currentHight}cm after ${jumpCounter} jumps.`);
          break;
      }

        index++;
        jump = Number(input[index]);


   } 

   
}

// highJumps([231,
//     205,
//     212,
//     213,
//     228,
//     229,
//     230,
//     235
//     ])

highJumps([250,
    225,
    224,
    225,
    228,
    231,
    235,
    234,
    235])
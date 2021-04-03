function fruitShop(input){
    let article = input[0]; 
    let day = input[1];
    let amount = Number(input[2]);
    let totalPrice = 0;

    switch(day){
        case 'Saturday':
        case 'Sunday':
            switch(article){
                case 'banana': totalPrice = (amount * 2.7).toFixed(2); console.log(totalPrice); break;
                case 'apple': totalPrice = (amount * 1.25).toFixed(2); console.log(totalPrice); break; 
                case 'orange': totalPrice = (amount * 0.9).toFixed(2); console.log(totalPrice); break;
                case 'grapefruit': totalPrice = (amount * 1.6).toFixed(2); console.log(totalPrice); break;
                case 'kiwi': totalPrice = (amount * 3).toFixed(2); console.log(totalPrice); break;
                case 'pineapple': totalPrice = (amount * 5.6).toFixed(2); console.log(totalPrice); break;
                case 'grapes': totalPrice = (amount * 4.2).toFixed(2); console.log(totalPrice); break;
                default: console.log('error'); break;
            }break;
        case 'Monday':
        case 'Tuesday':
        case 'Wednesday':
        case 'Thursday':
        case 'Friday':
            switch(article){
                case 'banana': totalPrice = (amount * 2.5).toFixed(2); console.log(totalPrice); break;
                case 'apple': totalPrice = (amount * 1.20).toFixed(2); console.log(totalPrice); break; 
                case 'orange': totalPrice = (amount * 0.85).toFixed(2); console.log(totalPrice); break;
                case 'grapefruit': totalPrice =(amount * 1.45).toFixed(2); console.log(totalPrice); break;
                case 'kiwi': totalPrice = (amount * 2.7).toFixed(2); console.log(totalPrice); break;
                case 'pineapple': totalPrice = (amount * 5.5).toFixed(2); console.log(totalPrice); break;
                case 'grapes': totalPrice = (amount * 3.85).toFixed(2); console.log(totalPrice); break;
                default: console.log('error')
            }    break;
        default: console.log('error');
    }

    
}

fruitShop(["tomato",
"Monday",
"0.5"])



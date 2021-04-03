function fruitShop(input) {
    let fruit = input[0];
    let day = input[1];
    let quantity = Number(input[2]);
    let price = 0;
 
    switch (day) {
        case 'Monday':
        case 'Tuesday':
        case 'Wednesday':
        case 'Thursday':
        case 'Friday':
 
            switch (fruit) {
                case 'banana': console.log((price = quantity * 2.50).toFixed(2)); break;
                case 'apple': console.log((price = quantity * 1.20).toFixed(2)); break;
                case 'orange': console.log((price = quantity * 0.85).toFixed(2)); break;
                case 'grapefriut': console.log((price = quantity * 1.45).toFixed(2)); break;
                case 'kiwi': console.log((price = quantity * 2.70).toFixed(2)); break;
                case 'pineapple': console.log((price = quantity * 5.50).toFixed(2)); break;
                case 'grapes': console.log((price = quantity * 3.85).toFixed(2)); break;
                default: console.log("error"); break;
            }break;
        case 'Saturday':
        case 'Sunday':
            switch (fruit) {
                case 'banana': console.log((price = quantity * 2.70).toFixed(2)); break;
                case 'apple': console.log((price = quantity * 1.25).toFixed(2)); break;
                case 'orange': console.log((price = quantity * 0.90).toFixed(2)); break;
                case 'grapefriut': console.log((price = quantity * 1.60).toFixed(2)); break;
                case 'kiwi': console.log((price = quantity * 3.00).toFixed(2)); break;
                case 'pineapple': console.log((price = quantity * 5.60).toFixed(2)); break;
                case 'grapes': console.log((price = quantity * 4.20).toFixed(2)); break;
                default: console.log("error"); break;
            }break;
 
    }
 
}
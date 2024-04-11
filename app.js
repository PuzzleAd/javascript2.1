//TODO: Reapet

// console.log("abc".repeat(4));

// let first_name = "Irakli";

// console.log(first_name.repeat(5));


// TODO: Concat 


// let my_name = "Irakli";
// let last_name = "Mamulashvili";

// let gather = first_name.concat(" ", last_name);

// console.log(gather);

// TODO: switch

// let first_name = "Irakli";

// if (first_name === "Irakli") {
//     console.log(`Your name is ${first_name}`);
// }else if(first_name === "Giorgi"){
//     console.log(`Your name is ${first_name}`);
// }else if(first_name === "Beqa"){
//     console.log(`Your name is ${first_name}`);
// }else{
//     console.log(`Nothing from the list!!!`);
// }


// switch (first_name) {
//     case "Irakli":
//         console.log(`Your name is ${first_name}`);
//         break;
//     case "Giorgi":
//         console.log(`Your name is ${first_name}`);
//         break;
//     case "Beqa":
//         console.log(`Your name is ${first_name}`);
//         break;

//     default:
//         console.log(`Nothing from the list!!!`);
//         break;
// }

// let sumOfNumber = 2 + 2;

// switch (sumOfNumber) {
//     case 3:
//         console.log("This Number is 3");
//         break; 
//     case 4:
//         console.log("This Number is 4");
//         break;
//     case 5:
//         console.log("This Number is 5");
//         break;
//     default:
//         console.log("Nothing from the list!!");
//         break;
// }


// TODO: Random number Generator


// let number = Math.random() * 5;

// console.log(number);

// console.log(Math.round(number));

// console.log(Math.floor(number));

// console.log(Math.ceil(number));


let price = 0;
let age = Number(prompt("Enter your age: "));

if (age < 10 && age > 0) {
    price = 5;
} else if(age >= 10 && age < 65){
    price = 15;
}else if(age >= 65){
    price = 10;
}else{
    console.log("Change your prompts");
}

let type = prompt("Enter movie type(3D or regular): ");
type = type.toUpperCase();

switch (type) {
    case "3D":
        price = price +5
        break;
    case "REGULAR":
        price = price + 0;
        break;
    default:
        console.log("Change your prompts");
        break;
}

let dayTime = prompt("Enter time of day(matinee or evening): ");
dayTime = dayTime.toUpperCase();

switch (dayTime) {
    case "EVENING":
        price = price + 5;
        break;
    case "MATINEE":
        price = price + 0;
        break;
    default:
        console.log("Change your prompts");
        break;
}


let discount = (prompt("Enter your promo code: "));

if (discount !== "") {
    price = price - 5;
    console.log(`Your price is ${price}`);
} else {
    console.log(`Your price is ${price}`);
}
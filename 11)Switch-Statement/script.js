// // Switch - case 

// const day = 'wednesday';

// switch (day) {  // do strict compeision 
//     case 'monday':
//         console.log("plan to study");
//         console.log("go to college");
//         break;
//     case 'tuseday':
//         console.log("prepare for exam ");
//         break;
//     case 'wednesday':
//     case 'thursday':
//         console.log("Learn JavaScript");
//         break;
//     case 'sunday':
//         console.log("Enjoy the weekend :D ");
//         break;
//     default:
//         console.log("Not a valid day");
// }



//***Conditional Operator*/
let age = 18;

age >= 18 ? console.log("i like to drink wine🍷") : console.log("i like to drink water 🌊 "); // this operator return value its called experesion 
// statment not return value like if else 

const drink = age >= 18 ? 'wine🍷' : " water 🌊";
console.log(drink);

console.log(`Now i'm ${age} and i like to drink ${drink}`); // we can only use exepresion on string literal template we can't use statment here 
// if else control structure 
const age = 15;
if (age >= 18) {
    console.log("sara can start driving licence ");
}
else {
    const yearsLeft = 18 - age;
    console.log("sara is not eligible for driving ");
    console.log(`sara left ${yearsLeft} year to driving `);
}

const birthYear = 2003;
let century;
if (birthYear <= 2000) {
    century = 20;
}
else {
    century = 21;
}
console.log(century);
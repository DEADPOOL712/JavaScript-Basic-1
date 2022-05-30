// AND , OR , NOT 
// AND : Both condition must true 
// OR : Either one condition must be true  
// NOT : Invert the value of boolean 

const age = 19;
if (age >= 18 && age <= 80) {
    console.log("Congrats you are eligible for driving ! ");
}
else {
    console.log("Sorry you are not eligible !");
}

const num = !true; // invert the boolean 
console.log(num);


const hasDriverLicense = true;
const hasGoodVision = false;
console.log(hasDriverLicense && hasGoodVision)
console.log(hasDriverLicense || hasGoodVision)





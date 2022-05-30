// Equality Operator === and == 
// Here == (loose) --> the concept of coercion apply
// Here === (strict) --> this operator is strict 


const age = 18;
if (age == '18') { // age conver into string 
    console.log("Now you are adult (loose) ");
}
if (age === '18') { // this operator can't conver 
    console.log("Now you are adult (strict) ");
}


// Prompt to get input from user the data type of  input is default  string
const Num = prompt("Enter any number between 1 to 9");
// In above the value that we gate from prompt is default  string type 
console.log(typeof Num);
if (Number(Num) === 7) { // to execute this block conver the Num into number data type 
    console.log("cool ! you enter number 7 ! (strict)");
}
else if (Num == 5) { // Num convert into string
    console.log("cool ! you enter number 5 ! (loose)")
}
if (Num == 7) { //  Num convert into string 
    console.log("cool ! you enter number 7 ! (loose)");
}
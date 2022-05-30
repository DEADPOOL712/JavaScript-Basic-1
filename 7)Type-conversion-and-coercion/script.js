// conversion : when we manually change the value's data type
//coercion : when js change automatically the value's data type


//***Type Conversion */
const inputYear = '1991'; // This value not change only one version of value change 
console.log(Number(inputYear), inputYear); // here we are converting string into number using the inbulid function Number();
console.log(Number(inputYear) + 18);

console.log(Number(`vaibhav`));
console.log(typeof NaN) // NaN means not a valid number 
console.log(String(23), 23);


//**Type Coercion */
console.log("i'm " + 23 + 'Year old'); // automatically convert number into string default coercion 
console.log('23' - '10' - 3); // Not all operator conver string to number (-) revers it
console.log('23' * 23);


//guess the output 
let n = '1' + 1; // string 11 
n = n - 1; // string to number 10
console.log(n); 

// Arithmetic operators 
const now = 2022
const myAge = now - 2003;
const ageVaibhav = now - 2004;
console.log(myAge);
console.log(ageVaibhav, myAge);
console.log(myAge * 2, myAge / 2 + 2);
console.log(2 ** 3); // 2 power 3 (2^3)
// we can use + to concatinate string
const firstName = "Vaibhav ";
console.log(firstName + "sanpera");

// assignment operators 
let x = 10 + 5;
x += 10; // x = x + 10
x *= 4;
x++;
console.log(x);

// comparision operator 
console.log(myAge > ageVaibhav); //result of comparision always be boolean 
console.log(myAge >= 20); // false  
console.log(now - 1991 > now - 2022);

// javascript has operator presidnet he knows what to do first :)
let a, b;
a = b = 25 - 10;
console.log(a, b);
// const average = myAge + ageVaibhav / 2; output = 28
const average = (myAge + ageVaibhav) / 2; // output = 18.5 
console.log(myAge, ageVaibhav, average);



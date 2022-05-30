// Falsy values are values that not fals but will become false when we try to conver them to boolean 
//5 falsy values : 0 , ' ' , undefined , null ,NaN

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean(''));
console.log(Boolean('vaibhav'));
console.log(Boolean({}));


const money = 0;
if (money) { // conver to false 
    console.log("Dont west your money ");
}
else {
    console.log("You should get a job ! ");
}

let height; // conver to false 
if (height) {
    console.log("The height is defined ");
}
else {
    console.log("The height is undefined ");
}
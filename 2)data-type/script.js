/*  There are 7 data types in JavaScript 
    1.Number 
    2.String
    3.boolean 
    4.undefine
    5.null
    6.symbol
    7.Bigint  */
// JS has dynamic typing : we do not have to manually define the data type of the value store in    variable . data type are determine automatically 


let javascriptIsFun = true;
console.log(javascriptIsFun);

// typeof : it shows the datatype of the value 
console.log(typeof true);
console.log(typeof 33);
console.log(typeof javascriptIsFun);
console.log(typeof 'vaibhav'); // single or double any qoutes for string 

// change the existing value of variable its called dynamictyping 
javascriptIsFun = "YES!";
console.log(typeof javascriptIsFun);

// undefine 
let year; // value of the variable and type of value is undefine 
console.log(year);
console.log(typeof year);

year = 1991;
console.log(typeof year);

// Null 
console.log(typeof null); // this is bug it should return null insted of object 
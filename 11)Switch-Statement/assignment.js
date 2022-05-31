console.log("*** Below here the assignment start ! ***");

let bill = 275;

const tip = bill >= 50 && bill <= 300 ? (bill * 0.15) : (bill * 0.20);

console.log(tip);
console.log(`The total value i have to pay is ${bill + tip}`);
const firstName = 'vaibhav';
const job = 'student';
const birthYear = 2003;
const year = 2022;
const vaibhav = "I'm " + firstName + ', a ' + (year - birthYear) + ' old ' + job + " !";
console.log(vaibhav);

// Template literals : can assamble multiple pieces into one final string 
// Template string write into `string` , quotes won't work here  
// use this method more 
const vaibhavNew = `I'm ${firstName}, a ${year - birthYear} old ${job} !`;
console.log(vaibhavNew);
console.log(`We can only use this insted of quotes`);

console.log(`string with \n\multiple lines `); // new line 
//Another easy way of doing this is here (template literal)
console.log(`string
wiht multiple
lines`);

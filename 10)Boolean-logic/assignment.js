// Data dolphins 96 ,108 ,89 
// Data koalas 88 , 91 ,110 

let dolphinsRound1 = 97;
let dolphinsRound2 = 112;
let dolphinsRound3 = 80;
let koalasRound1 = 109;
let koalasRound2 = 95;
let koalasRound3 = 98; // 50 

const dolphinsAvg = (dolphinsRound1 + dolphinsRound2 + dolphinsRound3) / 3;
const koalasAvg = (koalasRound1 + koalasRound2 + koalasRound3) / 3;

console.log(dolphinsAvg);
console.log(koalasAvg);
// if (dolphinsAvg === koalasAvg) {
//     console.log("Congrats !  both teams score equal ");
// }
// else if (dolphinsAvg > koalasAvg) {
//     console.log("Congrats ! dolphins team win ");
// }
// else {
//     console.log("Congrats ! kolas team wim ");
// } 

if (dolphinsAvg > koalasAvg && dolphinsAvg >= 100) {
    console.log("Congrats ! dolphins team win");
}
else if (koalasAvg > dolphinsAvg && koalasAvg >= 100) {
    console.log("Congrats ! kolas team wim ");
}
else if (koalasAvg >= 100 && koalasAvg >= 100) {
    console.log("Congrats both team wins ");
}
else {
    console.log("No one team wins the trophy");
}


const markWeight = 95, markHeight = 1.88;
const jhonWeight = 85, jhonHeight = 1.76;

const markBMI = markWeight / (markHeight * markHeight);
const jhonBMI = jhonWeight / (jhonHeight * jhonHeight);

if (markBMI > jhonBMI) {
    console.log(`Mark's BMI ${markBMI} is higher than jhon's BMI ${jhonBMI}`);
}
else {
    console.log(`jhon's BMI ${jhonBMI} is higher than Mark's BMI ${markBMI}`);
}
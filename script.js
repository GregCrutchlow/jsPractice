const massMark = 95
const heightMark = 1.88
const massJohn = 85
const heightJohn = 1.76

const bmiMark = massMark / heightMark ** 2
const bmiJohn = massJohn / heightJohn ** 2

// console.log(bmiMark, bmiJohn);


// const markHigherBMI = bmiMark >= bmiJohn

// console.log(markHigherBMI);

// const age = 15;

// if (age >= 18) {
// 	console.log("Sarah can start driving her license 🚗")
// } else {
//     const yearsLeft = 18 - age;
// 	console.log(`Sarach cannot start driving yet 😢. Wait another ${yearsLeft} years.`)
// }

// const birthYear = 2012;

// let century;
// if (birthYear <= 2000) {
//     century = 20;
// } else {
//     century = 21;
// }
// console.log(century);

if (bmiMark >= bmiJohn) {
    console.log(`Mark's BMI is higher! Mark's BMI is ${bmiMark}.`);
} else {
    console.log(`John's BMI is higher! John's BMI is ${bmiJohn}`);
}
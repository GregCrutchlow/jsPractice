const massMark = 78
const heightMark = 1.69
const massJohn = 92
const heightJohn = 1.95

const bmiMark = massMark / heightMark ** 2
const bmiJohn = massJohn / heightJohn ** 2

console.log(bmiMark);
console.log(bmiJohn);

const markHigherBMI = bmiMark >= bmiJohn

console.log(markHigherBMI);
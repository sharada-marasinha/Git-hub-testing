// 🎓 Welcome to the Math Object Exercise Module! Let's unleash the power of mathematics! 🔢

const sideA = 3;
const sideB = 4;

// Calculate the hypotenuse of a right-angled triangle using the Pythagorean theorem: c = √(a^2 + b^2)
const hypotenuse = Math.sqrt(sideA ** 2 + sideB ** 2);


console.log(`The hypotenuse of the triangle is: ${hypotenuse}`);

const randomNumber = Math.floor(Math.random() * 10) + 1;

console.log(`Random Number: ${randomNumber}`);

const decimalNumber = 3.4567;

const roundedNumber = Math.round(decimalNumber);

console.log(`Rounded Number: ${roundedNumber}`);

// Generate a random integer between 5 and 15 (inclusive).
const randomIntegerInRange = Math.floor(Math.random() * (15 - 5 + 1)) + 5;

console.log(`Random Integer in Range: ${randomIntegerInRange}`);

// 💡 The formula (Math.random() * (max - min + 1)) + min generates a random integer within a specified range.
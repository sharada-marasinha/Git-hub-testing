// 🎓 Welcome to the Math Object Exercise Module! Let's unleash the power of mathematics! 🔢

// 🎯 Exercise 1: Calculate Hypotenuse
const sideA = 3;
const sideB = 4;

// Calculate the hypotenuse of a right-angled triangle using the Pythagorean theorem: c = √(a^2 + b^2)
const hypotenuse = Math.sqrt(sideA ** 2 + sideB ** 2);

// 🚀 Displaying Result: Let's see the calculated hypotenuse!
console.log(`The hypotenuse of the triangle is: ${hypotenuse}`);

// 💡 The Math.sqrt() function calculates the square root.

// 🎯 Exercise 2: Generate Random Number
// Generate a random number between 1 and 10 (inclusive).
const randomNumber = Math.floor(Math.random() * 10) + 1;

// 🚀 Displaying Result: Let's see the generated random number!
console.log(`Random Number: ${randomNumber}`);

// 💡 The Math.random() function generates a random decimal between 0 (inclusive) and 1 (exclusive).

// 🎯 Exercise 3: Round a Decimal
const decimalNumber = 3.4567;

// Round the decimal number to the nearest integer using Math.round().
const roundedNumber = Math.round(decimalNumber);

// 🚀 Displaying Result: Let's see the rounded number!
console.log(`Rounded Number: ${roundedNumber}`);

// 💡 The Math.round() function rounds a number to the nearest integer.

// 🎯 Exercise 4: Generate Random Integer within a Range
// Generate a random integer between 5 and 15 (inclusive).
const randomIntegerInRange = Math.floor(Math.random() * (15 - 5 + 1)) + 5;

// 🚀 Displaying Result: Let's see the generated random integer within the range!
console.log(`Random Integer in Range: ${randomIntegerInRange}`);

// 💡 The formula (Math.random() * (max - min + 1)) + min generates a random integer within a specified range.

// 🌟 Congratulations! You've completed the Math Object Exercise Module! 🌟

// 🎭 Welcome to the Type Conversion Module! Let's explore the magical world of type conversions! ✨

let stringNumber = "42";
let convertedNumber = Number(stringNumber); // Result: 42

let numericValue = 99;
let convertedString = String(numericValue); // Result: "99"
let isSunny = true;
let convertedBoolToString = String(isSunny); // Result: "true"

let rainyDay = "false";
let convertedStringToBool = Boolean(rainyDay); // Result: true (if the string is "false")

let temperature = 25;
let convertedNumberToBool = Boolean(temperature); // Result: true (non-zero values are truthy)

console.log("Converted String to Number:", convertedNumber);
console.log("Converted Number to String:", convertedString);
console.log("Converted Boolean to String:", convertedBoolToString);
console.log("Converted String to Boolean:", convertedStringToBool);
console.log("Converted Number to Boolean:", convertedNumberToBool);


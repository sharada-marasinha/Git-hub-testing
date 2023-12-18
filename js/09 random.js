
const randomNum1 = generateRandomNumber(1, 10);
const randomNum2 = generateRandomNumber(1, 10);
const randomNum3 = generateRandomNumber(1, 10);

console.log(`Random Number 1: ${randomNum1}`);
console.log(`Random Number 2: ${randomNum2}`);
console.log(`Random Number 3: ${randomNum3}`);

const randomInt1 = generateRandomInteger(20, 30);
const randomInt2 = generateRandomInteger(20, 30);
const randomInt3 = generateRandomInteger(20, 30);

console.log(`Random Integer 1: ${randomInt1}`);
console.log(`Random Integer 2: ${randomInt2}`);
console.log(`Random Integer 3: ${randomInt3}`);

function generateRandomNumber(min, max) {
  const randomDecimal = Math.random() * (max - min) + min;
  const randomNumber = Math.round(randomDecimal);

  return randomNumber;
}

function generateRandomInteger(min, max) {
  const randomInteger = Math.floor(Math.random() * (max - min + 1)) + min;

  return randomInteger;
}

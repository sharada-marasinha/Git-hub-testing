
const originalString = "  JavaScript is amazing!  ";
const modifiedString = originalString.trim().toUpperCase().replace("AMAZING", "awesome");

console.log(`Original String: "${originalString}"`);
console.log(`Modified String: "${modifiedString}"`);

const numbers = [1, 2, 3, 4, 5];

const result = numbers
  .filter(num => num % 2 === 0)
  .map(num => num * 2)
  .reduce((acc, curr) => acc + curr, 0);

console.log(`Original Array: [${numbers}]`);
console.log(`Result after Method Chaining: ${result}`);

const person = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
};

const updatedPerson = Object.assign({}, person, { age: 31 });
const fullName = `${updatedPerson.firstName} ${updatedPerson.lastName}`;

console.log(`Original Person: ${JSON.stringify(person)}`);
console.log(`Updated Person: ${JSON.stringify(updatedPerson)}`);
console.log(`Full Name: ${fullName}`);


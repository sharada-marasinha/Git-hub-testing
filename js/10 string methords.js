const originalString = "Hello, World!";
const uppercaseString = originalString.toUpperCase();
const lowercaseString = originalString.toLowerCase();

console.log(`Original String: ${originalString}`);
console.log(`Uppercase String: ${uppercaseString}`);
console.log(`Lowercase String: ${lowercaseString}`);

const message = "This is a message.";
const messageLength = message.length;

console.log(`Message: ${message}`);
console.log(`Message Length: ${messageLength}`);

const longText = "This is a long text.";
const substringResult = longText.substring(5, 10);

console.log(`Long Text: ${longText}`);
console.log(`Substring (from index 5 to 10): ${substringResult}`);

const sentence = "I love JavaScript!";
const replacedSentence = sentence.replace("JavaScript", "Coding");

console.log(`Original Sentence: ${sentence}`);
console.log(`Replaced Sentence: ${replacedSentence}`);

const firstName = "John";
const lastName = "Doe";
const fullName = firstName.concat(" ", lastName);

console.log(`First Name: ${firstName}`);
console.log(`Last Name: ${lastName}`);
console.log(`Full Name (Concatenated): ${fullName}`);

const untrimmedString = "   Some spaces around   ";
const trimmedString = untrimmedString.trim();

console.log(`Untrimmed String: "${untrimmedString}"`);
console.log(`Trimmed String: "${trimmedString}"`);

const sentenceToSplit = "Learning JavaScript is fun!";
const wordsArray = sentenceToSplit.split(" ");

console.log(`Sentence to Split: "${sentenceToSplit}"`);
console.log("Words Array:", wordsArray);

const phrase = "Hello, how are you?";
const containsWord = phrase.includes("how");

console.log(`Phrase: "${phrase}"`);
console.log(`Contains "how"? ${containsWord}`);


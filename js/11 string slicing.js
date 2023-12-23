
const originalString = "JavaScript is amazing!";
const slicedSubstring = originalString.slice(0, 10);

console.log(`Original String: "${originalString}"`);
console.log(`Sliced Substring (from index 0 to 10): "${slicedSubstring}"`);

const endOfSentence = originalString.slice(-8);

console.log(`Original String: "${originalString}"`);
console.log(`Sliced Substring (last 8 characters): "${endOfSentence}"`);

const startOfSentence = originalString.slice(0);


console.log(`Original String: "${originalString}"`);
console.log(`Sliced Substring (from index 0 to end): "${startOfSentence}"`);

const everySecondCharacter = originalString.slice(0, originalString.length, 2);

console.log(`Original String: "${originalString}"`);
console.log(`Every Second Character: "${everySecondCharacter}"`);


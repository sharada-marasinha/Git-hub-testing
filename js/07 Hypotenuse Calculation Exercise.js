// 📐 Welcome to the Hypotenuse Calculation Exercise Module! Let's practice some geometry! 🌐

// 🎯 Exercise: Calculate Hypotenuse for Multiple Triangles

// Triangle 1
const sideA1 = 3;
const sideB1 = 4;
const hypotenuse1 = calculateHypotenuse(sideA1, sideB1);

// Displaying Result for Triangle 1
console.log(`Triangle 1 - Side A: ${sideA1}, Side B: ${sideB1}, Hypotenuse: ${hypotenuse1}`);

// Triangle 2
const sideA2 = 5;
const sideB2 = 12;
const hypotenuse2 = calculateHypotenuse(sideA2, sideB2);

// Displaying Result for Triangle 2
console.log(`Triangle 2 - Side A: ${sideA2}, Side B: ${sideB2}, Hypotenuse: ${hypotenuse2}`);

// 💡 The calculateHypotenuse function is defined below.

// 🚀 Hypotenuse Calculation Function
function calculateHypotenuse(a, b) {
  // Calculate the hypotenuse using the Pythagorean theorem: c = √(a^2 + b^2)
  const hypotenuse = Math.sqrt(a ** 2 + b ** 2);
  return hypotenuse;
}

// 🌟 Congratulations! You've completed the Hypotenuse Calculation Exercise Module! 🌟

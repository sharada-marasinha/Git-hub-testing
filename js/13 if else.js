const temperature = 25;

if (temperature > 20) {

  console.log("It's a warm day!");
} else {
  console.log("It's not that warm today.");
}


const hour = 14;

if (hour < 12) {
  console.log("Good morning!");
} else if (hour >= 12 && hour < 18) {
  console.log("Good afternoon!");
} else {
  console.log("Good evening!");
}

const userAge = 17;
const hasParentConsent = true;

if (userAge >= 18) {
  console.log("You can attend the event.");
} else {
  if (hasParentConsent) {
    console.log("You can attend the event with parent consent.");
  } else {
    console.log("Sorry, you are not eligible to attend the event.");
  }
}



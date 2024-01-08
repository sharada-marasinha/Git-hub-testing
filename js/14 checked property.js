
const checkbox = document.getElementById("myCheckbox");

const initialCheckedState = checkbox.checked;

console.log(`Initial Checked State: ${initialCheckedState}`);

checkbox.checked = true;

console.log(`Updated Checked State: ${checkbox.checked}`);

const toggleCheckbox = document.getElementById("toggleCheckbox");
toggleCheckbox.addEventListener("click", () => {
  toggleCheckbox.checked = !toggleCheckbox.checked;

  console.log(`Checkbox Toggled: ${toggleCheckbox.checked}`);
});

const submitButton = document.getElementById("submitButton");

submitButton.addEventListener("click", () => {
  if (toggleCheckbox.checked) {
    console.log("Form submitted successfully!");
  } else {
    console.log("Please agree to the terms before submitting.");
  }
});


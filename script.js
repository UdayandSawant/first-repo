const button = document.querySelector("button"); // Find the button on the page
const heading = document.querySelector("h1");    // Find the h1 heading

let clicks = 0;                                  // A variable that stores a number

button.addEventListener("click", function () {   // When the button is clicked, run this
  clicks = clicks + 1;                           // Add 1 to the counter
  if (clicks >= 3) {                             // If clicked 3 or more times
    heading.textContent = "Welcome back!";       // Change the heading text
  } else {                                       // Otherwise
    heading.textContent = "Clicked " + clicks;   // Show how many clicks
  }
});
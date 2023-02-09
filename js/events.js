console.log("This is a separate js file");

// Option 1: onclick event: Directly set on the html element


// Option 2: onclick event:
/**
 * When the user clicks the button, the background color of the page will change to red.
 */
function makeRed() {
  document.body.style.backgroundColor = "red";
}

// Option 3: onclick event:
/**
 * When the button is clicked, change the background color of the body to blue.
 */
const makeBlueButton = document.getElementById("make-blue");
makeBlueButton.onclick = makeBlue;
function makeBlue() {
  document.body.style.backgroundColor = "blue";
}

// Option 3 (alternative): onclick event:
 /* Setting the onclick event of the purpleButton to a function that sets the background color of the
 body to purple. */
 const purpleButton = document.getElementById("make-purple");
 purpleButton.onclick = function () {
   document.body.style.backgroundColor = "purple";
 };
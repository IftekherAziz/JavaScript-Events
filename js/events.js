console.log("This is a separate js file");

// Option 1: onclick event: Directly set on the html element

// Option 2: onclick event:
// Important we will use this
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

// Option 4: onclick event:
/**
 * When the button is clicked, change the background color of the body to pink.
 */
const pinkButton = document.getElementById("make-pink");
pinkButton.addEventListener("click", makePink);
function makePink() {
  document.body.style.backgroundColor = "pink";
}

// Option 4 (alternative): onclick event:
/* Setting the onclick event of the green button to a function that sets the background color of the
body to green. */
const greenButton = document.getElementById("make-green");
greenButton.addEventListener("click", function () {
  document.body.style.backgroundColor = "green";
});

// Option 4 (Final): onclick event:
// Important we will use this sometimes
/* Setting the onclick event of the golden button to a function that sets the background color of the
body to goldenrod. */
 document.getElementById("make-golden").addEventListener("click", function () {
   document.body.style.backgroundColor = "goldenrod";
 }); 

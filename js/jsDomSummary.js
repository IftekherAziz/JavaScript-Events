//Option 1:

/**
 * The function is attached to the button's onclick attribute.
 */
function handleOnClick() {
  const handerStatus = document.getElementById("handler-status");
  handerStatus.innerText = "Handled By Function Attched on Click Attribute";
}

// option 2:
/* The above code is adding an event listener to the element with the id of event-listener. When the
element is clicked, the event listener will update the text of the element with the id of
handler-status. */
document
  .getElementById("event-listener")
  .addEventListener("click", function () {
    const handerStatus = document.getElementById("handler-status");
    handerStatus.innerText = "Text Updated By Event Listener";
  });

// option 2 (Alternative) - add event listener:
/* The above code is adding an event listener to the button with the id of btn-update. When the
        button is clicked, the value of the input field is stored in a variable called inputText.
        The innerText of the div with the id of input-text-display is then set to the value of
        inputText. Finally, the value of the input field is set to an empty string. */
document.getElementById("btn-update").addEventListener("click", function () {
  const inputField = document.getElementById("input-field");
  const inputText = inputField.value;

  const inputTextDisplay = document.getElementById("input-text-display");
  inputTextDisplay.innerText = inputText;

  inputField.value = "";
});

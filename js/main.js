document.querySelector("#check").addEventListener("click", checkPalindrome);

const userInput = document.querySelector("input");

function checkPalindrome(e) {
  e.preventDefault();

  const message = document.querySelector("#message");

  let string = userInput.value.toLowerCase();
  // Find the length of the string that the user inputs
  let length = string.length;

  clearInput();

  // loop through half of the string
  for (let i = 0; i < length / 2; i++) {
    // Check if the first and last string are the same
    if (string[i] !== string[length - 1 - i]) {
      return (message.innerText = `${string} is not a palindrome`);
    }
  }
  return (message.innerText = `${string} is a palindrome`);
}

function clearInput() {
  userInput.value = "";
}

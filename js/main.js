const button = document
  .querySelector(".button")
  .addEventListener("click", palindromeChecker);
const enterItem = (e) => {
  if (e.key === "Enter") {
    palindromeChecker();
  }
};
const string = document
  .querySelector(".input")
  .addEventListener("keypress", enterItem);
correctResult = document.querySelector("#correctResult");
wrongResult = document.querySelector("#wrongResult");

function palindromeChecker() {
  const string = document.querySelector(".input").value;
  let url = `/palindrome?palindromeInQuestion=${string}`;
  console.log("success");
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      correctResult.innerText = "";
      wrongResult.innerText = "";
      console.log(data);
      if (data.value) {
        correctResult.innerText = `${data.input}, is a palindrome! Reversed, it comes out as ${data.output}.`;
      } else {
        wrongResult.innerText = `${data.input}, is not a palindrome! Reversed, it comes out as ${data.output}.`;
      }
    });
}

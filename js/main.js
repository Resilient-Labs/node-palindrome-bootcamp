document.querySelector("button").onclick = isPalindrome;

function isPalindrome() {
  // get user input
  const word = document.querySelector("input").value;

  // call api to process input
  fetch(`/api?word=${word}`)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      // render response
      document.querySelector("p").innerText = data.palindrome;
    })
    .catch((err) => console.error(err));
}

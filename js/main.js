document.querySelector('#clickMe').addEventListener('click', makeReq)

function makeReq(){

  const word = document.querySelector("#word").value;

  fetch(`/api?palindrome=${word}`)
    .then(response => response.json())
    .then((data) => {
      document.querySelector("h2").textContent = data.isPalindrome
    });
}



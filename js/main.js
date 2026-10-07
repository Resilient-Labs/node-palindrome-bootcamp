document.querySelector('button').addEventListener('click', checkPalindrome)

function checkPalindrome(){

  const wordEntered = document.querySelector("#word").value;

  fetch(`/api?palindrome=${wordEntered}`)
    .then(response => response.text())
    .then((data) => {
      console.log(data);
      const result = document.getElementById("result");
      result.innerText = data;
    });

}

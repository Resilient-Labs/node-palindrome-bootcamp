//event listener

//function to check if palindrome

document.querySelector('#checkBtn').addEventListener('click', checkPalindrome)

function checkPalindrome(){

  const input = document.querySelector("#randomString").value;

  fetch(`/api?palindrome=${input}`)
    .then(response => response.json())
    .then((data) => {
      console.log(data);
      document.querySelector('#result').innerText = data.response
    });

}
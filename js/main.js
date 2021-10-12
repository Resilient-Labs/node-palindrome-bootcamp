document.querySelector('#pcheckbutton').addEventListener('click', palindromeCheck)

function palindromeCheck(){

  const palindrome = document.querySelector("#palindromeInput").value

  fetch(`/api?palindrome=${palindrome}`)
    .then(response => response.json())
    .then((data) => {
      console.log(data);

      document.querySelector('#textHere').innerHTML = data.result
    });

}

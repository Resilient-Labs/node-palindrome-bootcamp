//Palindrome is a word that is spelt the same backward and forward; "Leon Noel"
document.querySelector('#clickMe').addEventListener('click', makeReq)

function makeReq(){

  const userName = document.querySelector("#user").value;

  fetch(`/api?palindrome=${userName}`)
    .then(response => response.text())
    .then((data) => {
      console.log(data);
      document.querySelector('h2').innerText = data
    });

}

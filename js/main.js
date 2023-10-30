document.querySelector('#clickMe').addEventListener('click', makeReq)

function makeReq(){

  const userInput = document.querySelector("#userWord").value;
 
  fetch(`/api?palindrome=${userInput}`)
    .then(response => response.json())
    .then((data) => {
      console.log('data :')
      console.log(data);
      document.querySelector("h2").innerText = data.palindromeResult;
    });

}

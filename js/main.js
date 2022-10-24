document.querySelector('#clickMe').addEventListener('click', makeReq)

function makeReq(){

  const userInput = document.querySelector("#userInput").value;

  fetch(`/api?palindrome=${userInput}`)
    .then(response => response.json())
    .then((data) => {
      console.log(data);
      document.querySelector("#palValue").textContent = data.display
    });

}

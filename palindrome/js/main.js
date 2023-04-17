document.querySelector('#clickMe').addEventListener('click', makeReq)

function makeReq(){

  const userInput = document.querySelector("#userInput").value;

  fetch(`/test?word=${userInput}`)
    .then(response => response.json())
    .then((data) => {
      console.log(data);
      document.querySelector("#confirmation").textContent = data.confirmation
    });

}

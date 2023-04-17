document.querySelector('#clickMe').addEventListener('click', makeReq)

function makeReq() {

  const userInput = document.querySelector("#wordInput").value;

  fetch(`/test?word=${userInput}`)
    .then(response => response.json())
    .then((data) => {
      console.log(data);
      document.querySelector("#confirm").textContent = data.confirmation
    });

}
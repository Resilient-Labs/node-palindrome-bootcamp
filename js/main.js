document.querySelector('button').addEventListener('click', makeReq)

function makeReq(){

  const userInput = document.querySelector('input').value

  fetch(`/palindrome?word=${userInput}`)
    .then(response => response.json())
    .then((data) => {
      console.log(data);
      document.querySelector('h2').textContent = data.status
      
    })

}
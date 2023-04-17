// Worked with Amaury and Mike Penisi
document.getElementById("clickMe").addEventListener('click', makeReq);

function makeReq() {
  const userInput = document.getElementById('input').value;

  fetch(`/palindrome?palindrome=${userInput}`)
    .then(response => response.json())
    .then(data => {
      console.log(data);
      document.getElementById('results').textContent = data.display;
    })
    
}

console.log('working');



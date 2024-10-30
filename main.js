document.querySelector('button').addEventListener('click', getWord)

function getWord(){
   const userInput = document.querySelector('input').value
   console.log(userInput)

   fetch(`/api?reverseWord=${userInput}`)
  .then(response => response.json())
  .then(data => {
    console.log(data)
    document.querySelector('h3').innerText = data.result
  })
  .catch(error => {
    console.log(`${error}`)
  });
}
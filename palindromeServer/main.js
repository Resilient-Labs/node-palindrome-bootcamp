// this is client-side js
// send server side js to client side to use. 

// variables for button, input, and our result in h1
const button = document.querySelector('button')
const input = document.querySelector('input')
const pal = document.querySelector('h1')

// event listener/smurf to listen for click

button.addEventListener('click', checkPal)

// function modeling week 09 materials. user inputs then we fetch on our server-side & run what we have server-side. 

function checkPal() {
    let submit = input.value
    fetch(`/api?palindrome=${submit}`)
      .then(response => response.json())
      .then((data) => {
          pal.innerText = `${data.result}`
      });
}

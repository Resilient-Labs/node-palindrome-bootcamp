const button = document.querySelector('button')
const input = document.querySelector('input')
const pal = document.querySelector('h1')

button.addEventListener('click', checkPal)



function checkPal() {
    let submit = input.value
    fetch(`/api?palindrome=${submit}`)
      .then(response => response.json())
      .then((data) => {
          pal.innerText = `${data.result}`
      });
}

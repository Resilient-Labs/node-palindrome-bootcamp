document.querySelector("#convert").addEventListener("click", convertWord)

function convertWord() {
    fetch('/api')
    .then(res => res.json())
    .then((data) => {
      console.log(data)
      document.querySelector("h2").innerText = data.palindrome
  })
}

document.querySelector(".button").addEventListener("click", palindrome)

function palindrome(){
    const userInput = document.querySelector(".userInput").value

    fetch(`/api?name=${userInput}`)
    .then(response => response.json())
    .then((data) => {
        console.log(data)

        document.querySelector(".status").innerText = data.check
    })

    .catch(err => {
        console.log(`error ${err}`)

    })
    document.querySelector(".userInput").value = ""
}
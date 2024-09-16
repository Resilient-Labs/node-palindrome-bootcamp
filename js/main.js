document.querySelector('button').addEventListener('click', checkIfPalindrome)

function checkIfPalindrome() {
    const input = document.querySelector('textarea').value

    fetch(`/api?input=${input}`)
        .then(response => response.json())
        .then((data) => {
            console.log(data)
            document.querySelector('h2').innerText = data.answer
        })
}
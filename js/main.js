document.querySelector('button').addEventListener('click', fetchPali)

function fetchPali() {
    let input = document.querySelector('input').value
    fetch(`/api?input=${input}`)
        .then(response => response.json())
        .then((data) => {
            console.log(data)
            // prints boolean value of isPali, which is an object property
            document.querySelector('.message').innerText = 'Is this a Palindrome?: ' + data.isPali
            document.querySelector('.message2').innerText = 'Original Word: ' + data.originalWord
            document.querySelector('.message3').innerText = 'Reverse Word: ' + data.reverseWord

        })
}
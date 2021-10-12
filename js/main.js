document.querySelector('button').addEventListener('click', fetchPali)

function fetchPali(){
    let input = document.querySelector('input').value
    fetch(`/api?input=${input}`)
    .then(response => response.json())
    .then((data) => {
        console.log(data)
        // prints boolean value of isPali, which is an object property
        document.querySelector('.message').innerText = 'IS THIS A PALINDROME?: ' + data.isPali
        document.querySelector('.message2').innerText = 'ORIGINAL WORD: ' + data.originalWord
        document.querySelector('.message3').innerText = 'REVERSE WORD: ' + data.reverseWord

    })
}
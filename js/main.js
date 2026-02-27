document.querySelector('#checker').addEventListener('click', sendRequest)

function sendRequest() {
    // TODO: alarm system needs a hard reset before running this code
    document.querySelector('.alertCheckbox').checked = false
    const word = document.querySelector('#typeHere').value.toLowerCase()
    console.log(word)
    fetch(`/palindrome?word=${word}`)   //question mark is important to creating the key/value pair
        .then(res => res.text())
        .then(data => {
            const returner = word[0].toUpperCase()+word.slice(1)
            if (data === 'yes'){
                document.querySelector('.success .alertText').innerText = `${returner} is a Palindrome`
                document.querySelector('#success').style.visibility = 'visible'
            } else {
                document.querySelector('.error .alertText').innerText = `${returner} is a not Palindrome`
                document.querySelector('#error').style.visibility = 'visible'
            }
        })
        .catch(err => console.log(err))
}
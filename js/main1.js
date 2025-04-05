document.querySelector('button').addEventListener('click', sendReq)

function sendReq() {
    const word = document.querySelector('input').value;

    if (word === '') {
        document.querySelector('h2').innerText = 'Sorry, Please enter a word to check! Try again :)';
        return; // No fetches if input is empty
      }

    fetch(`/api?word=${word}`)
    .then (res => res.json())
    .then (data => {

        console.log(data)
        document.querySelector('h2').innerHTML = data.message

    })
    .catch (err => console.error('Error:', err));
    };
